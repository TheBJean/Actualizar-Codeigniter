<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');
// Ruta form 1
//localhost/PDW202416/Formulario1
$routes->get('/Formulario1', 'CFormularios::MostrarForm1');


// Ruta form 2
//localhost/PDW202416/Formulario2
$routes->get('/Formulario2', 'CFormularios::MostrarForm2');

//localhost/PDW202416/Formulario3
$routes->get('/Formulario3', 'CFormularios::MostrarForm3');