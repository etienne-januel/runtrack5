<?php

namespace App\DataFixtures;

use Faker;
use DateTime;
use App\Entity\Projets;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class ProjectFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $faker = Faker\Factory::create('fr_FR');

        for ($i = 1; $i <= 10; $i++) {
        $projet = new Projets();
        $projet->setTitle('Article n° '.$i);
        $projet->setContent("<p>" . $faker->text . "</p>");
        $projet->setImage("http://placehold.it/350x150");
        $projet->setCreatedAt(new DateTime('today'));
        $manager->persist($projet);
    }

    $manager->flush();
    }
}
