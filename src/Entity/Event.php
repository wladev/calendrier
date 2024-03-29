<?php

namespace App\Entity;

use App\Repository\EventRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: EventRepository::class)]
class Event
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $nameEvent = null;

    #[ORM\Column(length: 50)]
    private ?string $sharingEvent = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $dateEvent = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $endEvent = null;

    #[ORM\Column(length: 50)]
    private ?string $repeatEvent = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNameEvent(): ?string
    {
        return $this->nameEvent;
    }

    public function setNameEvent(string $nameEvent): static
    {
        $this->nameEvent = $nameEvent;

        return $this;
    }

    public function getSharingEvent(): ?string
    {
        return $this->sharingEvent;
    }

    public function setSharingEvent(string $sharingEvent): static
    {
        $this->sharingEvent = $sharingEvent;

        return $this;
    }

    public function getDateEvent(): ?\DateTimeImmutable
    {
        return $this->dateEvent;
    }

    public function setDateEvent(\DateTimeImmutable $dateEvent): static
    {
        $this->dateEvent = $dateEvent;

        return $this;
    }

    public function getEndEvent(): ?\DateTimeImmutable
    {
        return $this->endEvent;
    }

    public function setEndEvent(\DateTimeImmutable $endEvent): static
    {
        $this->endEvent = $endEvent;

        return $this;
    }

    public function getRepeatEvent(): ?string
    {
        return $this->repeatEvent;
    }

    public function setRepeatEvent(string $repeatEvent): static
    {
        $this->repeatEvent = $repeatEvent;

        return $this;
    }
}
