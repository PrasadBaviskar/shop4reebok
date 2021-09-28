let images = [  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYDkocBOcxuzODVMNIMtGnH5WApfdsr-g2yA&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZCofI3uio3mIvdjQtdLqscak2PWhps4wPIQ&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5OWK8PtbbtCwkaTpNj3O0YbK4gtZutO5K8A&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ2SxlIF7DmezzAdGQ79_VBZ7shpzv7FLTsw&usqp=CAU"
                ];

                let container = document.getElementById("myslideshow");
                var img = document.createElement("img");
                container.append(img)
                img.src = images[3];

                function startSlideshow() {

                let count = 0;
                setInterval(function() {

                container.innerHTML = null;
    

                img.src = images[count];

                container.append(img)
                count++

                if(count == images.length){
                count = 0;
        }

                },2000)



}

startSlideshow();