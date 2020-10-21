function validateForm(form){
	var msg = "";
	
	//requerente
	if(form.getValue("nome") == ""){
		msg += i18n.translate("validanome");
	}
	if(form.getValue("email") == ""){
		msg += i18n.translate("validaemail");
	}
	if(form.getValue("telefone") == ""){
		msg += i18n.translate("validatelefone");
	}
	if(form.getValue("rg") == ""){
		msg += i18n.translate("validarg");
	}
	if(form.getValue("dataNasc") == ""){
		msg += i18n.translate("validadatanasc");
	}

	//ponto comercial
	if(form.getValue("tipoPonto") == ""){
		msg += i18n.translate("validatipoponto");
	}

	if(form.getValue("seg") != "on" && form.getValue("ter") != "on" && form.getValue("qua") != "on" && form.getValue("qui") != "on" && form.getValue("sex") != "on" && form.getValue("sab") != "on" && form.getValue("dom") != "on"){
		msg += i18n.translate("validadias");
	}

	if(form.getValue("cep") == ""){
		msg += i18n.translate("validacep");
	}
	if(form.getValue("logradouro") == ""){
		msg += i18n.translate("validalocalidade");
	}
	if(form.getValue("bairro") == ""){
		msg += i18n.translate("validabairro");
	}
	if(form.getValue("cidade") == ""){
		msg += i18n.translate("validacidade");
	}
	if(form.getValue("estado") == ""){
		msg += i18n.translate("validaestado");
	}

	//responsaveis
	var responsaveis = form.getChildrenIndexes("responsaveisTabela");
	if(responsaveis == 0){
		msg += i18n.translate("validaresponsaveis");
	}

	//financeiro
	if(form.getValue("valor") == ""){
		msg += i18n.translate("validavalor");
	}

	if(msg != ""){
		throw msg;
	}
}