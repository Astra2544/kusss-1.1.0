var ischanged='false';

function change()
{
   ischanged = 'true';
}


function hasChanged()
{
 if (ischanged == 'true')
 { 
  if (confirm('Ein Formular auf dieser Seite wurde geändert! \n\n\nOhne Speichern gehen die Änderungen verloren!\n\n\nDrücken Sie \n\n[Ok] um die Änderungen zu verwerfen, \n\n[Abbrechen] um die aktuelle Aktion abzubrechen (Speichern ist danach möglich).'))
  	{  		
  		return true;
  	}
  return false;
 }
}

function attention(msg)
{
	if (confirm(msg + '\n\nAchtung! \n\nDiese Aktion ist unwiderruflich!\n\n\nDrücken Sie \n\n[Ok] um die Aktion auszuführen, \n\n[Abbrechen] um die aktuelle Aktion abzubrechen.'))
  	{  		
  		return true;
  	}
  return false;
}

//function attentionNotVoting()
//{
//	if (confirm('\n\nAchtung! \n\nDiese Aktion ist unwiderruflich!\n\n\n Wollen Sie wirklich auf die Mitbestimmung beim Semsterticket NEU verzichten? \n\n Drücken Sie \n\n[Ok] wenn Sie das wollen, \n\n oder \n\n[Abbrechen] um doch zu wählen.'))
//  	{  		
//  		return true;
//  	}
//  return false;
//}

function attentionNotVoting()
{
	if (confirm('\n\nAchtung! \n\nDiese Aktion ist unwiderruflich!\n\n\n Wollen Sie wirklich auf die Mitbestimmung bei der Verwendung Ihres Studienbeitrages verzichten? \n\n Drücken Sie \n\n[Ok] wenn Sie das wollen, \n\n oder \n\n[Abbrechen] um doch zu wählen.'))
  	{  		
  		return true;
  	}
  return false;
}

function checkDeleteAll(formname, elementToDelete)
{
	if (window.document.forms[formname].elements[elementToDelete].checked)
	{
		if (confirm('\n\nAchtung! \n\nDiese Aktion ist unwiderruflich!\n\n\n Sie Löschen ALLE Einträge dieser Liste \n\n Drücken Sie \n\n[Ok] wenn Sie das wollen, \n\n[Abbrechen] um die aktuelle Aktion abzubrechen.'))
  		{  		
  			return true;
  		}
  		return false;
  	}
  	return true;
}