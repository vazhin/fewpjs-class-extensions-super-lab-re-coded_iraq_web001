// Write your classes here
class Tree {
  constuctor(species){
    this.species = species
  }
  static definition(){
    return 'A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.'
  }
}

class Deciduous extends Tree {
  constuctor(species, name){
    super(species)

  }
}
