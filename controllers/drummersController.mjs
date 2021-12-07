// db is an argument to this function so
// that we can make db queries inside
export default function initDrummerController(db) {
  // Role of mainController: render a list of drummers
  // findAll drummers -> res.render.
  const getAllDrummers = (req, res) => {
    console.log("GET Request: /");
    db.Drummer.findAll()
      .then((drummers) => {
        // drummers is an array of drummers from findAll.
        // can access data via .name / .id / etc.
        console.log(drummers);
        res.render('main', { drummers });
      })
      .catch((error) => console.log(error));
  };

  const getOneDrummer = (req, res) => {
    console.log("GET Request: /drummer/:id");
    const drummerId = req.params.id;

    db.Drummer.findOne({
      where: {
        id: drummerId,
      }
    })
      .then((selectedDrummer) => {
        console.log(selectedDrummer);
        // can access data via .name / .id / etc.
        res.render('drummer', { selectedDrummer });
      })
      .catch((error) => console.log(error));
  };

  // return all methods we define in an object
  // refer to the routes file above to see this used
  return {
    getAllDrummers, getOneDrummer,
  };
}