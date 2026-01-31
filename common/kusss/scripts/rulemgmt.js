/* --- scripts for infotext --- */

   /* --- public --- */
   
	function clearText(name)
	{
		var field = getFormField(name);
		field.value = "";
		field.focus();
	}
	
	function addInfoText(name, type, id)
	{
		addText(name, type + " " + id, " ");
	}
	
	function addExtendsText(name, value)
	{
	 	addText(name, value, ", ");
	}
	
	/* --- private --- */
	
	function addText(name, value, separator)
	{
		var field = getFormField(name);
		if (value != "")
		{
			field.value = (field.value == "") ? value : field.value + separator + value;
		}
		field.focus();
	}
	
	function getFormField(name)
	{
		return document.forms["ruleForm"].elements[name];
	}
