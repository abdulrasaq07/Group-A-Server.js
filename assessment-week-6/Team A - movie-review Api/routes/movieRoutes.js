const express = require ('express');
const router = express.Router();

/* importing controller functions */

const {
    getAllMovies,
    getMovieById,
    getTopRatedMovies,
    getMovieStats,
    createMovie,
    updateMovie,
    partialUpdateMovie,
    deleteMovie
} = require ('../controllers/movieController.js');

/* Validation middleware */
const {
    validateMovie,
    validateMoviePatch
} = require ('../middleware/validateMovie.js');

/* Movie Routes */

router.get('/', getAllMovies);
router.get('/top-rated', getTopRatedMovies);
router.get('/stats/:id', getMovieStats);
router.get('/:id', getMovieById);
router.put('/:id', updateMovie);
router.post('/', createMovie);
router.patch('/:id', partialUpdateMovie);
router.delete('/:id', deleteMovie);

module.exports = router;
