function validation() {
  var textAge,Name,Age,textName;
  Name = (document.getElementById('firstName').value);
  Age = (document.getElementById('age').value);
  var pattern1=/[a-z]/; //Alphabets only
  var result=pattern1.test(Name);
  if(result)
  {
    if(Name.length > 6)
    {
      textName="Name Limit is 6 Letter Only";
    }
    else
    {
      textName="Valid";
    }
  }
  else
  {
    textName="Invalid";
  }
  var pattern2=/[0-9]/; //Numbers only
  var result1=pattern2.test(Age);
  if(result1)
  {
    if(Age > 18)
    {
      textAge="valid";
    }
    else
    {
      textAge="Age should be above 18";
    }
  }
  else
  {
    textAge="Invalid";
  }
    document.getElementById('entrydiv_firstnamePara').innerHTML = textName;
    document.getElementById('entrydiv_agepara').innerHTML = textAge;
}
function reset(){
  document.location.reload();
}
