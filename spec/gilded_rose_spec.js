describe("Gilded Rose", function() {

  it("should do something", function() {
    //update_quality();
  });

  it("check quality of Sulfuras ", function() {
    const item = items.filter(item => item.name == "Sulfuras, Hand of Ragnaros");

    update_quality();  //1st day
    update_quality();  //2nd day
    update_quality();  //3rd day

    // expect(items[0].quality).toEqual(19)
    // expect(items[0].sell_in).toEqual(9)

    // expect(items[1].quality).toEqual(1)
    // expect(items[1].sell_in).toEqual(1)
    //
    // expect(items[2].quality).toEqual(6)
    // expect(items[2].sell_in).toEqual(4)
    //
    expect(items[3].quality).toEqual(80)
    expect(items[3].sell_in).toEqual(0)
    //
    // expect(items[4].quality).toEqual(21)
    // expect(items[4].sell_in).toEqual(14)
    //
    // expect(items[5].quality).toEqual(24)
    // expect(items[5].sell_in).toEqual(11)
  });

  it("check the quality of Aged-brie",() => {
    const item = items.filter(item => item.name == "Aged Brie");

    update_quality()  //4th day

    expect(item[0].quality).toEqual(6)
    expect(item[0].sell_in).toEqual(-2)

    // update_quality()  //2nd day
    //
    // expect(items[0].quality).toEqual(19)
    // expect(items[0].sell_in).toEqual(9)
    //
    // expect(items[1].quality).toEqual(1)
    // expect(items[1].sell_in).toEqual(1)
    //
    // expect(items[2].quality).toEqual(6)
    // expect(items[2].sell_in).toEqual(4)
    //
    // expect(items[3].quality).toEqual(80)
    // expect(items[3].sell_in).toEqual(0)
    //
    // expect(items[4].quality).toEqual(21)
    // expect(items[4].sell_in).toEqual(14)
    //
    // expect(items[5].quality).toEqual(24)
    // expect(items[5].sell_in).toEqual(11)
  })

  it("check the quality of Elixir of the Mongoose",() => {
    const item = items.filter(item => item.name == "Elixir of the Mongoose");

    update_quality()  //5th day

    expect(item[0].quality).toEqual(2)
    expect(item[0].sell_in).toEqual(0)

    update_quality()  //6th day

    expect(item[0].quality).toEqual(0)
    expect(item[0].sell_in).toEqual(-1)

  })

  it("check the quality of +5 Dexterity Vest",() => {
    const item = items.filter(item => item.name == "+5 Dexterity Vest");

    update_quality()  //7th day

    expect(item[0].quality).toEqual(13)
    expect(item[0].sell_in).toEqual(3)

  })

  it("check the quality of Backstage passes to a TAFKAL80ETC concert",() => {
    const item = items.filter(item =>
      item.name == "Backstage passes to a TAFKAL80ETC concert");

    update_quality()  //8th day

    expect(item[0].quality).toEqual(31)
    expect(item[0].sell_in).toEqual(7)


    update_quality()  //9th day
    update_quality()  //10th day
    update_quality()  //11th day

    expect(item[0].quality).toEqual(38)
    expect(item[0].sell_in).toEqual(4)
  })

  it("check the quality of Conjured Mana Cake",() => {
    const item = items.filter(item =>
      item.name == "Conjured Mana Cake");

    update_quality()  //12th day

    expect(item[0].quality).toEqual(2)
    expect(item[0].sell_in).toEqual(0)


    update_quality()  //13th day
    expect(item[0].quality).toEqual(0)
    expect(item[0].sell_in).toEqual(-1)

  })

});
