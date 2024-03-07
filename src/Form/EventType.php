<?php

namespace App\Form;

use App\Entity\Event;
use App\Entity\Users;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class EventType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('nameEvent')
            ->add('sharingEvent', ChoiceType::class, [
                'choices' => [
                    'Tous' => '0',
                    'Parents uniquement' => '1',
                    'Moi uniquement' => '2'
                ]
            ])
            ->add('dateEvent')
            ->add('endEvent')
            ->add('repeatEvent', ChoiceType::class, [
                'choices' => [
                    'Aucune' => '0',
                    'Touts les jours' => '1',
                    'Toutes les semaines' => '2',
                    'Tous les mois' => '3',
                    'Tous les ans' => '4'
                ]
            ])
            
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Event::class,
        ]);
    }
}
