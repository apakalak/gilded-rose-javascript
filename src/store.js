class Store {
  constructor(){
    this.arrItems = [];
    this.arrItems.push(new StoreItem('+5 Dexterity Vest', 10, 20));
    this.arrItems.push(new StoreItem('Aged Brie',  2, 0));
    this.arrItems.push(new StoreItem('Elixir of the Mongoose', 5, 7));
    this.arrItems.push(new StoreItemWithConstantQuality('Sulfuras, Hand of Ragnaros', 0, 80));
    this.arrItems.push(new StoreItem('Backstage passes to a TAFKAL80ETC concert', 15, 20));
    this.arrItems.push(new StoreItem('Conjured Mana Cake', 3, 6));
  }
  getItems(){
    return this.arrItems
  }

  updateQuality(){
    //modify each item quality
    this.arrItems.forEach(item => {
      item.updateQuality();
    })
  }
}
