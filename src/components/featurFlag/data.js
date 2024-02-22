const dummyApiResponse = {
    showLightAndDarkMode : true,
    showTicTacTo : true,
    showRandomColore : true,
    showAccordian : true,
    showImageSlider : true
}


export default function FeatureFlagDataServiceCall(){
    return new Promise((resolve, reject) => {
        if(dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500)
        else reject('some error occured please try again');
    })
}