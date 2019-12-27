function countVowels()
{
    var input = document.getElementById("input").value;
    var str = input.split("");
    var count = 0;

    for(ch of str)
    {
        if(ch=='a'||ch=='A'||ch=='e'||ch=='E'||ch=='i'||ch=='I'||ch=='o'||ch=='O'
        ||ch=='u'||ch=='U')
        {
            count++;
        }
    }
    document.getElementById("output").innerHTML = count;
}