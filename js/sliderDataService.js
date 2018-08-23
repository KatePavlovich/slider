class SliderDataService {
    initializeUrls(successCallBack) {
        let imgUrls = [];
        imgUrls.push(
            "https://motivationping.com/wp-content/uploads/2017/10/motivational-inspirational-quotes-30.jpg"
        );
        imgUrls.push(
            "http://rishikajain.com/wp-content/uploads/2017/07/create-yourself.jpg"
        );
        imgUrls.push(
            "https://mk0ryrobg0ysk5t06n.kinstacdn.com/wp-content/uploads/2017/09/Hustle-Quotes-Motivation_-Don%E2%80%99t-stay-in-bed-unless-you-can.jpg"
        );

        successCallBack(imgUrls);
    }
}


class SliderAjaxDataService {
    initializeUrls(successCallBack) {
        $.ajax({
            url: 'https://repetitora.net/api/JS/Images',
            success: function (data) {
                let imgUrls = data.map((i) => i.original);

                successCallBack(imgUrls);
            }
        })
    }
}