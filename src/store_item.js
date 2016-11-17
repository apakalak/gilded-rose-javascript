class StoreItem {
  constructor(name, sell_in, quality){
    this.name = name
    this.sell_in = sell_in
    this.quality = quality
  }
  updateQuality(){
    this.sell_in <= 0 ? (this.quality = this.quality - 2) : this.quality--
    this.sell_in--;
  }
  
}
