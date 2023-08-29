const shop={
    ower:"alia",
    address:{
        street:'voot er goli',
        city:'ranbir',
        country:'bd'
    },
        products:['laptp','mac','monitor','keybord'],
        revenue:45000,
        isOpen:true,
        IsNew:false,
    }
    const shopJSON=JSON.stringify(shop);
    console.log(shopJSON);
    //if we want to get back object
    const shopObj=JSON.parse(shopJSON);
    console.log(shopObj)
