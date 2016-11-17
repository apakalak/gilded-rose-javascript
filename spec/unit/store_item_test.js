describe('Store item' ,() =>{
  it('store item quality has to reduce by 1 if no of days for its expiry is greater than 0' ,() =>{
    const storeItem = new StoreItem("item 1",3,4)
    storeItem.updateQuality()
    expect(storeItem.quality).toEqual(3)
    expect(storeItem.sell_in).toEqual(2)
  })

  it('store item quality has to reduce by 2 if no of days for its expiry is less than or equal to 0' ,() =>{
    const storeItem = new StoreItem("item 2",0,4)
    storeItem.updateQuality()
    expect(storeItem.quality).toEqual(2)
    expect(storeItem.sell_in).toEqual(-1)
  })
})
