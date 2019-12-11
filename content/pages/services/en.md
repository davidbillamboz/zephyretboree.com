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
  text: Depending on your priorities, you can prioritize either traditional mechanical propulsion or the one coming from low-carbon power sources. This choice has a direct impact on the different performance criteria of your transport solution.
  sliderConfig:
    defaultValue: 50
    min: 
      value: 30
      title: Engine
    max: 
      value: 70
      title: Sail
  valuesConfig:
    - name: delay
      title: Timely delivery
      min: 80
      max: 80
    - name: speed
      title: Operating speed
      min: 40
      max: 80
    - name: emissions
      title: Reduction of polluting emissions
      min: 70
      max: 30
    - name: price
      title: Price
      min: 80
      max: 50
  propulsions:
    - text: By prioritizing operating speed and prices comparable to the average on the market, the CO2 savings will vary around 30%, depending on the specificities of particular maritime connection (the geographic zone and the wind statistics).
      valuesText:
        delay: Our delays are guaranteed regardless of the chosen configuration
        speed: Operating speed comparable to the vessel with traditional mechanical propulsion
        emissions: Reduction by around 30%
        price: Prices comparable to the vessel with traditional mechanical propulsion
    - text: It is possible to cut-off significantly polluting emissions (by 50%) by making reasonable concessions when it comes to the operating speed and the transport price. By limiting the speed, the fuel savings are much more important, but the amount of transported goods during a particular period is lower. As a consequence, transport prices will raise to cover the operating costs.
      valuesText: 
        delay: Our delays are guaranteed regardless of the chosen configuration
        speed: Operating speed slightly
        emissions: Reduction by around 50%
        price: Prices slightly higher than the market ones
    - text: If the reduction of the environmental impact is your priority, we can propose very low carbon transport solutions, with a 70% reduction of polluting emissions, at the expense of a lower operating speed (10 knots) and higher transport costs.
      valuesText: 
        delay: Our delays are guaranteed regardless of the chosen configuration
        speed: Reduced operating speed
        emissions: Reduction by around 70%
        price: Prices above the market ones
