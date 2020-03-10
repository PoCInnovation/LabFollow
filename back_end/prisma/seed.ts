import { prisma } from '../src/generated/prisma-client'

async function main() {

  // creates 2 doctors with no aptients and surveys
  await prisma.createDoctor({
    email: 'paul.monnery@poc.eu',
    password: '$2b$10$DfjbZp6PSd9VFjl8MO7FKeyWwdpoxre4WY4xRsukhHXzGqu8wyLlG', // azerty
    name: 'Paul Monnery',
    speciality: 'Généraliste'
  })

  await prisma.createDoctor({
    email: 'laurane.sevin@poc.eu',
    password: '$2b$10$JIdcNBfHWBCOQzqHSD1A8u8PcaM1UwINASwBaU1srxoVf1gq8OPhm', // qwerty
    name: 'Laurane Sevin',
    speciality: 'Généraliste'
  })

  await prisma.createDoctor({
    email: 'administrator@labfollow.com',
    password: '$2b$10$JIdcNBfHWBCOQzqHSD1A8u8PcaM1UwINASwBaU1srxoVf1gq8OPhm', // qwerty
    name: 'Labfollow',
    speciality: 'Administrateur'
  })

  //creates 3 patients per doctor with no surveys
  await prisma.createPatient({
    email: 'jean@epitech.eu',
    name: 'Jean',
    birthday: '12/04/2000',
    password: '$2b$10$DfjbZp6PSd9VFjl8MO7FKeyWwdpoxre4WY4xRsukhHXzGqu8wyLlG', // azerty
    doctors: {
      connect: [
        {
          email: 'paul.monnery@poc.eu',
        },
      ],
    },
  })

  await prisma.createPatient({
    email: 'jacques@epitech.eu',
    name: 'Jacques',
    birthday: '12/04/2000',
    password: '$2b$10$DfjbZp6PSd9VFjl8MO7FKeyWwdpoxre4WY4xRsukhHXzGqu8wyLlG', // azerty
    doctors: {
      connect: [
        {
          email: 'paul.monnery@poc.eu',
        },
      ],
    },
  })

  await prisma.createPatient({
    email: 'jules@epitech.eu',
    name: 'Jules',
    birthday: '12/04/2000',
    password: '$2b$10$DfjbZp6PSd9VFjl8MO7FKeyWwdpoxre4WY4xRsukhHXzGqu8wyLlG', // azerty
    doctors: {
      connect: [
        {
          email: 'paul.monnery@poc.eu',
        },
      ],
    },
  })

  await prisma.createPatient({
    email: 'joseph@epitech.eu',
    name: 'Joseph',
    birthday: '12/04/2000',
    password: '$2b$10$DfjbZp6PSd9VFjl8MO7FKeyWwdpoxre4WY4xRsukhHXzGqu8wyLlG', // azerty
    doctors: {
      connect: [
        {
          email: 'laurane.sevin@poc.eu',
        },
      ],
    },
  })

  await prisma.createPatient({
    email: 'john@epitech.eu',
    name: 'John',
    birthday: '12/04/2000',
    password: '$2b$10$DfjbZp6PSd9VFjl8MO7FKeyWwdpoxre4WY4xRsukhHXzGqu8wyLlG', // azerty
    doctors: {
      connect: [
        {
          email: 'laurane.sevin@poc.eu',
        },
      ],
    },
  })

  await prisma.createPatient({
    email: 'jamy@epitech.eu',
    name: 'Jamy',
    birthday: '12/04/2000',
    password: '$2b$10$DfjbZp6PSd9VFjl8MO7FKeyWwdpoxre4WY4xRsukhHXzGqu8wyLlG', // azerty
    doctors: {
      connect: [
        {
          email: 'laurane.sevin@poc.eu',
        },
      ],
    },
  })

  //create on survey by patient
  await prisma.createSurvey({
    title: 'Retour post operation',
    content: 'Retour post operation',
    submitter: {
      connect: {
        email: 'paul.monnery@poc.eu',
      },
    },
    patient: {
      connect:
      {
        email: 'jean@epitech.eu',
      },
    },
  })

  await prisma.createSurvey({
    title: 'Impression sur les pillules de la semaine dernière',
    content: 'Impression sur les pillules de la semaine dernière',
    submitter: {
      connect: {
        email: 'paul.monnery@poc.eu',
      },
    },
    patient: {
      connect:
      {
        email: 'jacques@epitech.eu',
      },
    },
  })

  await prisma.createSurvey({
    title: 'Etat de votre jambe',
    content: 'Etat de votre jambe',
    submitter: {
      connect: {
        email: 'paul.monnery@poc.eu',
      },
    },
    patient: {
      connect:
      {
        email: 'jules@epitech.eu',
      },
    },
  })

  await prisma.createSurvey({
    title: 'Comment vous sentez vous ?',
    content: 'Comment vous sentez vous ?',
    submitter: {
      connect: {
        email: 'laurane.sevin@poc.eu',
      },
    },
    patient: {
      connect:
      {
        email: 'joseph@epitech.eu',
      },
    },
  })

  await prisma.createSurvey({
    title: 'Manquez vous de sommeil ?',
    content: 'Manquez vous de sommeil ?',
    submitter: {
      connect: {
        email: 'laurane.sevin@poc.eu',
      },
    },
    patient: {
      connect:
      {
        email: 'john@epitech.eu',
      },
    },
  })

  await prisma.createSurvey({
    title: 'souffrez vous de deshydratation ?',
    content: 'souffrez vous de deshydratation ?',
    submitter: {
      connect: {
        email: 'laurane.sevin@poc.eu',
      },
    },
    patient: {
      connect:
      {
        email: 'jamy@epitech.eu',
      },
    },
  })
}

main().catch(e => console.error(e))