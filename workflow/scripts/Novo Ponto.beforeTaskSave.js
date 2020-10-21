function beforeTaskSave(colleagueId,nextSequenceId,userList){
	
	var anexos = hAPI.listAttachments();
	var temAnexo = false;
	
	for(i=0; i < anexos.size(); i++){
		var anexoatual = anexos.get(i);
		if(anexoatual.getDocumentDescription() == "Proposta Comercial.pdf"){
			temAnexo = true;
		}
	}
	
	if(!temAnexo){
		throw("Proposta Comercial não foi anexada!");
	}
	
}  