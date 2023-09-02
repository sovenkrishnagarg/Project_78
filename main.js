var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Family Book","Ranbir Singh", "Diljeet Singh", "Rocky Singh", "Alia Singh", "Soni Singh"];
var i = 0;

function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [images];;
    images.push("https://i.postimg.cc/MGn9GJXw/family.jpg");
    images.push("https://i.postimg.cc/qqyYvVbq/grandpa.jpg");
    images.push("https://i.postimg.cc/wjMnFtMX/father.jpg");
    images.push("https://i.postimg.cc/5ymDKL83/bro.jpg");
    images.push("https://i.postimg.cc/JnL6wtrd/sister.jpg");
    images.push("https://i.postimg.cc/bw5W5zSK/mother.jpg");
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [names] ;
    names.push("Family Book");
    names.push("Ranbir Singh");
    names.push("Diljeet Songh");
    names.push("Rocky Singh");
    names.push("Alia singh");
    names.push("Soni Singh");
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
function submit() {
    var name1 = document.getElementById("input_1").value;
    var name2 = document.getElementById("input_2").value;
    var name3 = document.getElementById("input_3").value;
    var name4 = document.getElementById("input_4").value;
    
    array_of_names.push(name1);
    array_of_names.push(name2);
    array_of_names.push(name3);
    array_of_names.push(name4);
    
    console.log(array_of_names);
    document.getElementById("display_array_div").innerHTML = array_of_names;
    
    document.getElementById("submit_b").style.display = "none";
    document.getElementById("sort_b").style.display = "inline-block";
}