describe('Store Item With Constant Quality', ()=>{
  it('store item quality should not change',()=>{
    const constItem = new StoreItemWithConstantQuality("item 1",0,80)
    constItem.updateQuality()
    expect(constItem.quality).toEqual(80)
    expect(constItem.sell_in).toEqual(0)
  })

  it('store item sell_in value should be always 0',()=>{
    const constItem = new StoreItemWithConstantQuality("item 2",0,80)
    constItem.updateQuality()
    expect(constItem.sell_in).toEqual(0)
  })
});
