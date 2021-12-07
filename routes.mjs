import db from './models/index.mjs';

// import your controllers here
import initDrummerController from './controllers/drummersController.mjs';
import initReservationsController from './controllers/reservationsController.mjs';

export default function bindRoutes(app) {

  // initialize the controller functions here
  // pass in the db for all callbacks
  const drummerController = initDrummerController(db);
  const reservationsController = initReservationsController(db);

  // define your route matchers here using app
  app.get('/', drummerController.getAllDrummers);
  app.get('/drummer/:id', drummerController.getOneDrummer);
  app.get('/reservations/:drummer_id', reservationsController.getDrummerReservations);
  app.post('/reservation/:drummer_id', reservationsController.postDrummerReservation);
}
