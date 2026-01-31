/* --- interface functions --- */

var cssClassEvenRow = 'lightcell';
var cssClassOddRow = 'darkcell';
var cssClassEvenHighlightRow = 'highlightcell';
var cssClassOddHighlightRow = 'highlightdarkcell';

/* Checks or unchecks all checkboxes with the given name. */
function checkAll(name, checked)
{
  var elements = document.getElementsByName(name);
  doCheckAll(elements, name, checked);
}

/* Checks or unchecks all checkboxes with the given name
   BUT ONLY from the FORM with the given name.
   note: name parameter not used!
 */
function checkAllForm(form, name, checked)
{
  var elements = form.elements;
  doCheckAll(elements, name, checked);
}

/* toggles row highlighting. asserts that the checkbox is below a tr element. */
function checkOne(element, index)
{
  doCheckOne(element.parentNode.parentNode, element.checked, index);
}

/* --- helper functions --- */

function doCheckAll(elements, name, checked)
{
  for (i = 0; i < elements.length; i++)
  {    
    var element = elements[i];
    if (element.name == name)
    {    
	    element.checked = checked;
	    doCheckOne(element.parentNode.parentNode, checked, i);
    }
  }
}

function doCheckOne(node, checked, index)
{
  if (index % 2 != 0)
  {
      node.className = checked ? cssClassEvenHighlightRow : cssClassEvenRow;
  }
  else
  {
      node.className = checked ? cssClassOddHighlightRow : cssClassOddRow;
  }
}
