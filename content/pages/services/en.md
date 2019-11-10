---
title: Service EN # admin title
slug: services
# Metadata
metadata: 
  title: Our services
  description: ""
# Intro
intro: 
  title: Services
  subTitle: "Our goal: develop low carbon maritime transport"
  text: >-
    According to the International Maritime Organisation, to respect the objectives established by the Paris Agreement, CO2 emissions from maritime transport have to be divided by two by 2050. To achieve this goal, we combine innovative technologies to develop pioneering vessels that offer industrial performances while being environmentally friendly. **Thus, we offer to our clients to cut down their carbon footprint while conserving competitive cost.**
# Contact Button
contactButton: 
  title: You have a project?
  url: /en/contact/  
# Services
services:
  - icon: design
    title: Project design
    text: We analyse the supply chain of your activity, we identify the segments which can be optimised thanks to a more responsible vessel. If needed, we can rethink the organisation of your supply chain by supplementing our transport services with our logistic partners.
    tags:
      - Analyse of the logistic constraints of your activity
      - Establishment of the specifications
      - Design of logistics solution
  - icon: ship
    title: Ship design
    text: Depending on the activity, its operating speed, the port of call, etc the privileged technical solutions will vary. Thanks to our network of technical partners we can conceive an adapted design, or if needed refit an existing ship.
    tags:
      - Choice of the energy mix
      - Assessment of CO2 savings
      - Design of the vessel
  - icon: management
    title: Project management
    text: Ones the project is defined we assure the finance structuring of the ship as well as the oversee of the construction.
    tags:
      - Financial engineering
      - Choice of shipyard
      - Construction site oversee
  - icon: ship2
    title: Ship management
    text: We provide the nautical management of the vessel with respect of the most exigent certificates. We develop the internal tools which inform keep you informed on the carbon footprint of your transport and the position of your freight what will allow you to monitor optimally your supply chain.
    tags:
      - Exploitation of the vessel
      - QHSE
      - Expertise
simulator:
  title: Simulateur
  subTitle: Développer des projets adaptés à vos priorités
  text: En fonction de vos priorités, il est possible de privilégier l’utilisation de la propulsion mécanique conventionnelle ou bien celle des énergies décarbonnées. Ce choix impacte directement les différents critères de performances de votre service de transport.
  sliderConfig:
    min: 
      value: 30
      title: Moteur
    max: 
      value: 70
      title: Voile
  valuesConfig:
    - name: delay
      title: Respect des délais
      min: 80
      max: 80
    - name: speed
      title: Vitesse
      min: 40
      max: 80
    - name: emissions
      title: Réduction des émissions polluantes
      min: 70
      max: 30
    - name: price
      title: Prix
      min: 80
      max: 50
  propulsions:
    - title: Propulsion mécanique Diesel
      text: En privilégiant une vitesse d’exploitation et des prix similaires à ceux du marché, les économies de CO2 sont d’environ 30% selon les spécificités de la ligne maritime (géographie, statistiques de vent).
      valuesText:
        delay: Nos délais sont garantis quelle que soit la configuration choisie
        speed: Vitesse similaire à celle d'un navire classique à propulsion mécanique
        emissions: Réduction de 30% en moyenne des émissions polluantes
        price: Prix similaires à ceux d'un navire conventionnel à propulsion mécanique
    - title: Propulsion mixte
      text: En faisant un compromis, il est possible de réduire significativement les émissions polluantes (de l’ordre de 50%) en faisant des concessions raisonnables sur la vitesse et le prix du transport. En réduisant la vitesse, les économies de carburant sont certes plus importantes, mais la quantité de marchandise transportée sur une période donnée est plus faible, obligeant à augmenter le prix du transport pour couvrir les coûts d’exploitation.
      valuesText: 
        delay: Nos délais sont garantis quelle que soit la configuration choisie
        speed: Vitesse légèrement réduite
        emissions: Réduction d'environ 50%
        price: Prix légèrement supérieurs à ceux du marché
    - title: Propulsion bas-carbone
      text: Si la réduction de votre emprunte environnementale prime avant tout, alors nous pouvons vous proposer un service de transport très bas carbone, avec une réduction d’environ 70% des émissions de gaz polluants, au prix d’une vitesse de transport plus faible (environ 10 noeuds) et un prix plus élevés que ceux du marché.
      valuesText: 
        delay: Nos délais sont garantis quelle que soit la configuration choisie
        speed: Vitesse réduite
        emissions: Réduction de 70% en moyenne des émissions polluantes
        price: Prix  supérieurs à ceux du marché
