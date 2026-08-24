const student ={
    Name : "Karan",
    Age : 20,
    Marks : 98.9,
    city:"Dehradun"
};


//*to change the value of any key
//? obj_name.key_name = "new_value";

student.Name="Mumbai";
student.Marks="A";

//!--------------------------------------------------------------------------------------

//* To add a new key
//? obj_name.new_key_name = "value";

student.gender ="Male";

//!--------------------------------------------------------------------------------------

//*to delete a key

delete student.city;