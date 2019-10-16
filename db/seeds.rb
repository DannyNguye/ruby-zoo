# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


animal_1 = Animal.create(name: "Kevin", species: "Coyote", sex: "M", habitat: "Desert", diet: "Carnivore", description: "He's like Wiley, but he can't talk")

animal_2 = Animal.create(name: "Sarah", species: "Shark", sex: "F", habitat: "Ocean", diet: "Carnivore", description: "Sooooo many teeth. Such a big smile!")

animal_3 = Animal.create(name: "Ginger", species: "Gorilla", sex: "F", habitat: "Jungle", diet: "Herbivore", description: "Don't. I repeat. DON'T feed him bananas!!!")
