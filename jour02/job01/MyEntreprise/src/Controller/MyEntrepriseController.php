<?php

namespace App\Controller;

use App\Entity\Projets;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class MyEntrepriseController extends AbstractController
{

    /**
     * @Route("/", name="home")
     */
    public function home()
    {
        $projets = $this->getDoctrine()->getRepository(Projets::class)->findAll();
        return $this->render('myEntreprise/index.html.twig', [
            'projets' => $projets
        ]);
    }

    /**
     * @Route("/myEntreprise", name="myEntreprise")
     */
    public function index()
    {
        $projets = $this->getDoctrine()->getRepository(Projets::class)->findAll();
        return $this->render('myEntreprise/index.html.twig', [
            'projets' => $projets
        ]);
    }

    /**
     * @Route("myEntreprise/projet/{id}", name="projet_page")
     */
    public function projetPage(Projets $projet)
    {
        return $this->render('myEntreprise/projetPage.html.twig', [
            'projet' => $projet
        ]);
    }
}
