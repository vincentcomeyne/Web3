const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Ophalen van alle panden
// Ophalen van alle panden
exports.getPanden = async (req, res, next) => {
  try {
    const { postcode, gemeente, prijs } = req.query;
    const filters = {};

    if (postcode) {
      filters.postcode = Number(postcode);
    }

    if (gemeente) {
      filters.gemeente = gemeente;
    }

    if (prijs) {
      filters.prijs = Number(prijs);
    }

    const panden = await prisma.panden.findMany({
      where: filters,
      include: {
        afbeeldingen: true,  // Voeg afbeeldingen toe aan het pand-object
      },
    });

    res.json(panden);
  } catch (error) {
    next(error);
  }
};


// Ophalen van een specifiek pand
exports.getPand = async (req, res, next) => {
  try {
    const pand = await prisma.panden.findUnique({
      where: { id: Number(req.params.id) },
    });
    res.json(pand);
  } catch (error) {
    next(error);
  }
};

// Toevoegen van een pand
exports.createPand = async (req, res, next) => {
  try {
    const newPand = await prisma.panden.create({
      data: req.body,
    });
    res.json(newPand);
  } catch (error) {
    next(error);
  }
};

// Een pand bewerken
exports.updatePand = async (req, res, next) => {
  try {
    const updatedPand = await prisma.panden.update({
      where: { id: Number(req.params.id) },
      data: req.body,
    });
    res.json(updatedPand);
  } catch (error) {
    next(error);
  }
};

// Een pand verwijderen
exports.deletePand = async (req, res, next) => {
  try {
    const deletedPand = await prisma.panden.delete({
      where: { id: Number(req.params.id) },
    });
    res.json(deletedPand);
  } catch (error) {
    next(error);
  }
};
