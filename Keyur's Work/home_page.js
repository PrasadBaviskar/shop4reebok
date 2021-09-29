let images = ["images/sliding1.jpg","images/sliding2.jpg","images/sliding3.jpg","images/sliding1.jpg"];

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