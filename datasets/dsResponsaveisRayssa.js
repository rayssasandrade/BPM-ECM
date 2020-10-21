function createDataset(fields, constraints, sortFields) {

    var ds = DatasetBuilder.newDataset();
    ds.addColumn("login");
    ds.addColumn("nome");

    var filtroGrupo = DatasetFactory.createConstraint("colleagueGroupPK.groupId", "ResponsaveisRayssa", "ResponsaveisRayssa", ConstraintType.MUST);

    var datasetGrupo = DatasetFactory.getDataset("colleagueGroup", null, new Array(filtroGrupo), null);

    for(i = 0; i < datasetGrupo.rowsCount; i++) {
        var colabGrupo = datasetGrupo.getValue(i, "colleagueGroupPK.colleagueId");
        //var filtroColleague = DatasetFactory.createConstraint("colleaguePK.colleagueId", colabGrupo, colabGrupo, ConstraintType.MUST);
        var datasetColaborador = DatasetFactory.getDataset("colleague", null, /*new Array(filtroColleague)*/ null, null);

        for(j = 0; j < datasetColaborador.rowsCount; j++) {
            var colabCol = datasetColaborador.getValue(j, "colleaguePK.colleagueId");
            var colabNome = datasetColaborador.getValue(j, "colleagueName");
            if (colabCol == colabGrupo) {
                ds.addRow(new Array(colabCol, colabNome));
            }
        }
    }

    return ds;
}