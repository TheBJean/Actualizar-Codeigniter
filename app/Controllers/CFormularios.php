<?php

namespace App\Controllers;

class CFormularios extends BaseController
{
    // vista de form 1
    public function MostrarForm1(): string
    {
        return view('Forms/form1');
    }
    // vista de form 2
    public function MostrarForm2(): string
    {
        return view('Forms/form2');
    }

    public function MostrarForm3(): string
    {
        return view('Forms/form3');        
    }
    
}
