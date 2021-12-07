export default function initReservationsController(db) {
  const getDrummerReservations = (req, res) => {
    console.log("GET Request: /reservations/:drummer_id");
    const selectedDrummer = req.params.drummer_id;

    db.Reservation.findAll({
      where: {
        drummer_id: selectedDrummer,
      },
    })
      .then((reservations) => {
        console.log(reservations);
        const ejsObject = {
          drummerReservations: reservations,
          drummerId: selectedDrummer,
        };
        res.render('drummer-reservations', ejsObject);
      })
      .catch((error) => console.log(error));
  };

  const postDrummerReservation = (req, res) => {
    console.log("POST Request: /reservation/:drummer_id");
    console.log("Reservation Form input: ", req.body.reservation_date);

    db.Reservation.create({
      reservationDate: req.body.reservation_date,
      drummerId: req.params.drummer_id,
    })
      .then((reservation) => {
        console.log("reservation", reservation);
        res.send("reservation success!");
      })
      .catch((error) => console.log(error));
  }

  return {
    getDrummerReservations,
    postDrummerReservation,
  };
}