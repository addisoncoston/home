const fs = require('fs');

function reformatArray(originalArray) {
    const reformattedArray = [];
  
    originalArray.forEach((obj) => {
      const { forwardEmail, department, loginEmail } = obj;
  
      forwardEmail.forEach((email) => {
        reformattedArray.push({
          forwardEmail: email,
          department,
          loginEmail,
        });
      });
    });
  
    return reformattedArray;
  }
  
  // Example usage
  const originalArray = [
    {
      "loginEmail": "bill.burns@nfllamediaservices.com",
      "department": "social",
      "forwardEmail": [
        "zaria.wood@nfl.com",
        "Isaiah.Hayes@nfl.com",
        "Austin.Elledge@nfl.com",
        "Scott.Koppenhaver@nfl.com",
        "Sam.Fink@nfl.com",
        "rick.savage@nfl.com",
        "Alicia.Meyer@nfl.com",
        "Kevin.Vu2@nfl.com",
        "Colin.Huber@nfl.com",
        "jessica.murphy@nfl.com",
        "Erin.Schaffner@nfl.com",
        "David.Kushner@nfl.com",
        "Diego.Galicia@nfl.com",
        "Carly.Fasciglione@nfl.com",
        "Kylie.Callura@nfl.com",
        "Shannon.Domingsil@nfl.com",
        "Bryce.Gustafson@nfl.com",
        "Jason.Herman@nfl.com",
        "Jacob.Janower@nfl.com",
        "Colin.Travaglini@nfl.com",
        "Tj.Barnett@nfl.com",
        "Justin.Anderson@nfl.com",
        "Luca.Gallo@nfl.com",
        "Kyle.Smith@nfl.com",
        "kelsie.garrison@nfl.com",
        "Tim.Yoon@nfl.com",
        "McKenzie.Fox@nfl.com",
        "Melissa.Wamp@nfl.com",
        "Michael.Civiello@nfl.com",
        "Shannon.Lynch@nfl.com",
        "Jack.Farrow@nfl.com",
        "Eric.Eberhardt@nfl.com",
        "Scott.OMalley@nfl.com",
        "Justin.Goldman@nfl.com",
        "Al.Eewshah@nfl.com",
        "Katrina.Issa@nfl.com",
        "Zachary.Onaga@nfl.com",
        "Aaron.Tan@nfl.com",
        "Ralph.Warner@nfl.com",
        "Jordan.Dolbin@nfl.com",
        "addison.coston@gmail.com",
        "Pablo.Balderas@nfl.com",
        "eliza.smallwood@nfl.com",
        "jack.mcdonald@nfl.com",
        "stevenrhys.foster@nfl.com",
        "jasminemarie.garza@nfl.com"
      ]
    },
    {
      "loginEmail": "bob.spade@nfllamediaservices.com",
      "department": "mediaadmin",
      "forwardEmail": [
        "la.mediaadministration@nfl.com",
        "Lane.McFaddin@nfl.com",
        "emily.trendle@nfl.com",
        "jessica.martinez@nfl.com"
      ]
    },
    {
      "loginEmail": "molly.miller@nfllamediaservices.com",
      "department": "youtube",
      "forwardEmail": [
        "cara.mead@nfl.com",
        "Nate.Heaukulani@nfl.com",
        "kyle.schlogl@nfl.com",
        "joe.bray@nfl.com"
      ]
    },
    {
      "loginEmail": "dan.mcgann@nfllamediaservices.com",
      "department": "sponsorship",
      "forwardEmail": [
        "Ben.Gaedy@nfl.com",
        "Anisha.Mooradian@nfl.com",
        "Bintou.Camara@nfl.com",
        "gabe.piepergerdes@nfl.com",
        "Marissa.Ablack@nfl.com",
        "Ally.Greifinger@NFL.com",
        "Andrew.Hoffmann@nfl.com",
        "Jazmine.Clarke@nfl.com",
        "rachel.steinberg@nfl.com",
        "joe.knaus@nfl.com"
      ]
    },
    {
      "loginEmail": "josh.clark@nfllamediaservices.com",
      "department": "test",
      "forwardEmail": [
        "Ally.Greifinger@NFL.com"
      ]
    },
    {
      "loginEmail": "wilbur.goode@nfllamediaservices.com",
      "department": "promos",
      "forwardEmail": [
        "la.promossigniant@nfl.com"
      ]
    }
  ];
  const reformattedArray = reformatArray(originalArray);

  // Write reformatted array to a text file
  const filePath = 'reformatted_array.txt';
  const fileContent = JSON.stringify(reformattedArray, null, 2);
  
  fs.writeFile(filePath, fileContent, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('Reformatted array has been written to', filePath);
    }
  });