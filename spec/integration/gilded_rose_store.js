describe("Gilded Rose Store", function() {

  it("check quality of Store items after 1 day whose quality decreases by 1 per day - '+5 Dexterity Vest' and 'Elixir of the Mongoose'", function() {

    //const expected = [];
    //expected.push(new StoreItem('+5 Dexterity Vest', 10, 20));
    //expected.push(new StoreItem('Aged Brie', 2, 0));
    //expected.push(new StoreItem('Elixir of the Mongoose', 5, 7));
    //expected.push(new StoreItem('Sulfuras, Hand of Ragnaros', 0, 80));
    //expected.push(new StoreItem('Backstage passes to a TAFKAL80ETC concert', 15, 20));
    //expected.push(new StoreItem('Conjured Mana Cake', 3, 6));

    const store = new Store()
    store.updateQuality();
    expect(store.arrItems[0].sell_in).toEqual(9)
    expect(store.arrItems[0].quality).toEqual(19)
    expect(store.arrItems[2].sell_in).toEqual(4)
    expect(store.arrItems[2].quality).toEqual(6)
  });

  it("check quality of Store items after 1 day whose quality never changes - 'Sulfuras, Hand of Ragnaros'", function() {
    const store = new Store()
    store.updateQuality();
    expect(store.arrItems[3].sell_in).toEqual(0)
    expect(store.arrItems[3].quality).toEqual(80)
  });

  it("check quality of Store items after 1 day whose quality increases with time - 'Aged Brie'", function() {
    const store = new Store()
    store.updateQuality();
    expect(store.arrItems[1].sell_in).toEqual(1)
    expect(store.arrItems[1].quality).toEqual(1)
  });
});
