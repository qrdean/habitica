import { authWithHeaders } from '../../middlewares/auth';

const api = {};

// @TODO export this const, cannot export it from here because only routes are exported from
// controllers
const LAST_ANNOUNCEMENT_TITLE = 'NEW SUBSCRIBER SET AND OFFICIAL HABITICA CHALLENGES!';
const worldDmg = { // @TODO
  bailey: false,
};

/**
 * @api {get} /api/v3/news Get latest Bailey announcement
 * @apiName GetNews
 * @apiGroup News
 *
 *
 * @apiSuccess {Object} html Latest Bailey html
 *
 */
api.getNews = {
  method: 'GET',
  url: '/news',
  async handler (req, res) {
    const baileyClass = worldDmg.bailey ? 'npc_bailey_broken' : 'npc_bailey';

    res.status(200).send({
      html: `
      <div class="bailey">
        <div class="media align-items-center">
          <div class="mr-3 ${baileyClass}"></div>
          <div class="media-body">
            <h1 class="align-self-center">${res.t('newStuff')}</h1>
            <h2>12/2/2019 - ${LAST_ANNOUNCEMENT_TITLE}</h2>
          </div>
        </div>
        <hr/>
        <div class="promo_mystery_201912 center-block"></div>
        <h3>December Subscriber Items Revealed!</h3>
        <p>
          The December Subscriber Item Set has been revealed: the Polar Pixie Item Set! <a
          href='/user/settings/subscription'>Subscribe to Habitica</a> by December 31 to receive this
          exciting set! If you're already an active subscriber, reload the site and then head to
          Inventory > Items to claim your gear.
        </p>
        <p>
          Subscribers also receive the ability to buy Gems for Gold -- the longer you subscribe,
          the more Gems you can buy per month! There are other perks as well, such as longer access
          to uncompressed data and a cute Jackalope pet. Best of all, subscriptions let us keep
          Habitica running. Thank you very much for your support -- it means a lot to us.
        </p>
        <div class="small mb-3">by Beffymaroo</div>
        <div class="promo_take_this center-block"></div>
        <h3>December 2019 Resolution Success Challenge and Take This Challenge</h3>
        <p>
          The Habitica team has launched a special official Challenge series hosted in the <a
          href='/groups/guild/6e6a8bd3-9f5f-4351-9188-9f11fcd80a99' target='_blank'>Official New
          Year's Resolution Guild</a>. These Challenges are designed to help you build and
          maintain goals that are destined for success and then stick with them as the year
          progresses. For this month's Challenge, "<a
          href='/challenges/b83f3995-f7c9-4424-8728-be7dee8b52bc'>Journey's End and New
          Beginnings</a>", we're focusing on sharing our successes and reviewing the year!
          It has a 15 Gem prize, which will be awarded to five lucky winners on January 1st.
        </p>
        <p>
          Congratulations to the winners of November's Challenge, @LuxInWonderland, @noblegeas,
          @thebadhobbit, @Slardibarfast, and @yasaminnb!
        </p>
        <p>
          The next Take This Challenge has also launched, "<a
          href='/challenges/d969932e-887d-45eb-9f7d-312f2173c059'>Test Thy Courage!</a>", with a
          focus on positive social interactions. Be sure to check it out to earn additional pieces
          of the Take This armor set!
        </p>
        <p>
          <a href='http://www.takethis.org/' target='_blank'>Take This</a> is a nonprofit that
          seeks to inform the gamer community about mental health issues, to provide education
          about mental disorders and mental illness prevention, and to reduce the stigma of mental
          illness.
        <p>
          Congratulations to the winners of the last Take This Challenge, "Cast of Characters!":
          grand prize winner Geomiceman, and runners-up Christen, no_robot, 🔥 KidSlazy 🔥,
          marek13, and Nova Rose! Plus, all participants in that Challenge have received a piece of
          the <a href='http://habitica.wikia.com/wiki/Event_Item_Sequences#Take_This_Armor_Set'
          target='_blank'>Take This item set</a> if they hadn't completed it already. It is located
           in your Rewards column. Enjoy!
        </p>
        <div class="small mb-3">
          by Doctor B, the Take This team, Lemoness, Beffymaroo, and SabreCat
        </div>
      </div>
      `,
    });
  },
};

/**
 * @api {post} /api/v3/news/tell-me-later Get latest Bailey announcement in a second moment
 * @apiName TellMeLaterNews
 * @apiGroup News
 *
 *
 * @apiSuccess {Object} data An empty Object
 *
 */
api.tellMeLaterNews = {
  method: 'POST',
  middlewares: [authWithHeaders()],
  url: '/news/tell-me-later',
  async handler (req, res) {
    const { user } = res.locals;

    user.flags.newStuff = false;

    const existingNotificationIndex = user.notifications.findIndex(n => n && n.type === 'NEW_STUFF');
    if (existingNotificationIndex !== -1) user.notifications.splice(existingNotificationIndex, 1);
    user.addNotification('NEW_STUFF', { title: LAST_ANNOUNCEMENT_TITLE }, true); // seen by default

    await user.save();
    res.respond(200, {});
  },
};

export default api;
