const { Router } = require('express');
const router = Router()

router.get('/', (req,res) => {
    res.send('Deber de Contenedores DevOps 2024, Pedro Acosta')
});


module.exports = router;