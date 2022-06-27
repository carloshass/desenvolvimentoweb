class calendar {

    constructor() {
        this.arraysemana1 = [1, 2, 3, 4, 5, 6, 7];
        this.mesreferencia;
    }

    listaTabela() {
        let tbodycalendar = document.getElementById('tbodycalendar');
        tbodycalendar.innerText = "";

        this.mesreferencia = document.getElementById('calendariomes').value;

        if (this.mesreferencia == "1") {
            let tr1 = tbodycalendar.insertRow();

            let td_b = tr1.insertCell();
            td_b = tr1.insertCell();
            let td_1 = tr1.insertCell();
            let td_2 = tr1.insertCell();
            let td_3 = tr1.insertCell();
            let td_4 = tr1.insertCell();
            let td_5 = tr1.insertCell();

            let tr2 = tbodycalendar.insertRow();

            let td_6 = tr2.insertCell();
            let td_7 = tr2.insertCell();
            let td_8 = tr2.insertCell();
            let td_9 = tr2.insertCell();
            let td_10 = tr2.insertCell();
            let td_11 = tr2.insertCell();
            let td_12 = tr2.insertCell();

            let tr3 = tbodycalendar.insertRow();

            let td_13 = tr3.insertCell();
            let td_14 = tr3.insertCell();
            let td_15 = tr3.insertCell();
            let td_16 = tr3.insertCell();
            let td_17 = tr3.insertCell();
            let td_18 = tr3.insertCell();
            let td_19 = tr3.insertCell();

            let tr4 = tbodycalendar.insertRow();

            let td_20 = tr4.insertCell();
            let td_21 = tr4.insertCell();
            let td_22 = tr4.insertCell();
            let td_23 = tr4.insertCell();
            let td_24 = tr4.insertCell();
            let td_25 = tr4.insertCell();
            let td_26 = tr4.insertCell();

            let tr5 = tbodycalendar.insertRow();

            let td_27 = tr5.insertCell();
            let td_28 = tr5.insertCell();
            let td_29 = tr5.insertCell();
            let td_30 = tr5.insertCell();
            let td_31 = tr5.insertCell();

            td_b.innerText = "";
            td_b.innerText = "";
            td_1.innerText = "1";
            td_2.innerText = "2";
            td_3.innerText = "3";
            td_4.innerText = "4";
            td_5.innerText = "5";
            td_6.innerText = "6";
            td_7.innerText = "7";
            td_8.innerText = "8";
            td_9.innerText = "9";
            td_10.innerText = "10";
            td_11.innerText = "11";
            td_12.innerText = "12";
            td_13.innerText = "13";
            td_14.innerText = "14";
            td_15.innerText = "15";
            td_16.innerText = "16";
            td_17.innerText = "17";
            td_18.innerText = "18";
            td_19.innerText = "19";
            td_20.innerText = "20";
            td_21.innerText = "21";
            td_22.innerText = "22";
            td_23.innerText = "23";
            td_24.innerText = "24";
            td_25.innerText = "25";
            td_26.innerText = "26";
            td_27.innerText = "27";
            td_28.innerText = "28";
            td_29.innerText = "29";
            td_30.innerText = "30";
            td_31.innerText = "31";

            td_7.classList.add('bg-primary');
            td_26.classList.add('bg-warning');

            td_1.setAttribute("onclick", "calendario.adicionar()");
            td_2.setAttribute("onclick", "calendario.adicionar()");
            td_3.setAttribute("onclick", "calendario.adicionar()");
            td_4.setAttribute("onclick", "calendario.adicionar()");
            td_5.setAttribute("onclick", "calendario.adicionar()");
            td_6.setAttribute("onclick", "calendario.adicionar()");
            td_7.setAttribute("onclick", "calendario.adicionar()");
            td_8.setAttribute("onclick", "calendario.adicionar()");
            td_9.setAttribute("onclick", "calendario.adicionar()");
            td_10.setAttribute("onclick", "calendario.adicionar()");
            td_11.setAttribute("onclick", "calendario.adicionar()");
            td_12.setAttribute("onclick", "calendario.adicionar()");
            td_13.setAttribute("onclick", "calendario.adicionar()");
            td_14.setAttribute("onclick", "calendario.adicionar()");
            td_15.setAttribute("onclick", "calendario.adicionar()");
            td_16.setAttribute("onclick", "calendario.adicionar()");
            td_17.setAttribute("onclick", "calendario.adicionar()");
            td_18.setAttribute("onclick", "calendario.adicionar()");
            td_19.setAttribute("onclick", "calendario.adicionar()");
            td_20.setAttribute("onclick", "calendario.adicionar()");
            td_21.setAttribute("onclick", "calendario.adicionar()");
            td_22.setAttribute("onclick", "calendario.adicionar()");
            td_23.setAttribute("onclick", "calendario.adicionar()");
            td_24.setAttribute("onclick", "calendario.adicionar()");
            td_25.setAttribute("onclick", "calendario.adicionar()");
            td_26.setAttribute("onclick", "calendario.adicionar()");
            td_27.setAttribute("onclick", "calendario.adicionar()");
            td_28.setAttribute("onclick", "calendario.adicionar()");
            td_29.setAttribute("onclick", "calendario.adicionar()");
            td_30.setAttribute("onclick", "calendario.adicionar()");
            td_31.setAttribute("onclick", "calendario.adicionar()");

        } else if (this.mesreferencia == "2") {
            let tr1 = tbodycalendar.insertRow();

            let td_b = tr1.insertCell();
            td_b = tr1.insertCell();
            td_b = tr1.insertCell();
            td_b = tr1.insertCell();
            td_b = tr1.insertCell();
            let td_1 = tr1.insertCell();
            let td_2 = tr1.insertCell();


            let tr2 = tbodycalendar.insertRow();
            let td_3 = tr2.insertCell();
            let td_4 = tr2.insertCell();
            let td_5 = tr2.insertCell();
            let td_6 = tr2.insertCell();
            let td_7 = tr2.insertCell();
            let td_8 = tr2.insertCell();
            let td_9 = tr2.insertCell();


            let tr3 = tbodycalendar.insertRow();

            let td_10 = tr3.insertCell();
            let td_11 = tr3.insertCell();
            let td_12 = tr3.insertCell();
            let td_13 = tr3.insertCell();
            let td_14 = tr3.insertCell();
            let td_15 = tr3.insertCell();
            let td_16 = tr3.insertCell();

            let tr4 = tbodycalendar.insertRow();

            let td_17 = tr4.insertCell();
            let td_18 = tr4.insertCell();
            let td_19 = tr4.insertCell();
            let td_20 = tr4.insertCell();
            let td_21 = tr4.insertCell();
            let td_22 = tr4.insertCell();
            let td_23 = tr4.insertCell();

            let tr5 = tbodycalendar.insertRow();

            let td_24 = tr5.insertCell();
            let td_25 = tr5.insertCell();
            let td_26 = tr5.insertCell();
            let td_27 = tr5.insertCell();
            let td_28 = tr5.insertCell();
            let td_29 = tr5.insertCell();
            let td_30 = tr5.insertCell();

            td_b.innerText = "";
            td_1.innerText = "1";
            td_2.innerText = "2";
            td_3.innerText = "3";
            td_4.innerText = "4";
            td_5.innerText = "5";
            td_6.innerText = "6";
            td_7.innerText = "7";
            td_8.innerText = "8";
            td_9.innerText = "9";
            td_10.innerText = "10";
            td_11.innerText = "11";
            td_12.innerText = "12";
            td_13.innerText = "13";
            td_14.innerText = "14";
            td_15.innerText = "15";
            td_16.innerText = "16";
            td_17.innerText = "17";
            td_18.innerText = "18";
            td_19.innerText = "19";
            td_20.innerText = "20";
            td_21.innerText = "21";
            td_22.innerText = "22";
            td_23.innerText = "23";
            td_24.innerText = "24";
            td_25.innerText = "25";
            td_26.innerText = "26";
            td_27.innerText = "27";
            td_28.innerText = "28";
            td_29.innerText = "29";
            td_30.innerText = "30";


            td_26.classList.add('bg-success');
            td_27.classList.add('bg-success');
            td_28.classList.add('bg-success');
            td_29.classList.add('bg-success');


            td_1.setAttribute("onclick", "calendario.adicionar(1)");
            td_2.setAttribute("onclick", "calendario.adicionar()");
            td_3.setAttribute("onclick", "calendario.adicionar()");
            td_4.setAttribute("onclick", "calendario.adicionar()");
            td_5.setAttribute("onclick", "calendario.adicionar()");
            td_6.setAttribute("onclick", "calendario.adicionar()");
            td_7.setAttribute("onclick", "calendario.adicionar()");
            td_8.setAttribute("onclick", "calendario.adicionar()");
            td_9.setAttribute("onclick", "calendario.adicionar()");
            td_10.setAttribute("onclick", "calendario.adicionar()");
            td_11.setAttribute("onclick", "calendario.adicionar()");
            td_12.setAttribute("onclick", "calendario.adicionar()");
            td_13.setAttribute("onclick", "calendario.adicionar()");
            td_14.setAttribute("onclick", "calendario.adicionar()");
            td_15.setAttribute("onclick", "calendario.adicionar()");
            td_16.setAttribute("onclick", "calendario.adicionar()");
            td_17.setAttribute("onclick", "calendario.adicionar()");
            td_18.setAttribute("onclick", "calendario.adicionar()");
            td_19.setAttribute("onclick", "calendario.adicionar()");
            td_20.setAttribute("onclick", "calendario.adicionar()");
            td_21.setAttribute("onclick", "calendario.adicionar()");
            td_22.setAttribute("onclick", "calendario.adicionar()");
            td_23.setAttribute("onclick", "calendario.adicionar()");
            td_24.setAttribute("onclick", "calendario.adicionar()");
            td_25.setAttribute("onclick", "calendario.adicionar()");
            td_26.setAttribute("onclick", "calendario.adicionar()");
            td_27.setAttribute("onclick", "calendario.adicionar()");
            td_28.setAttribute("onclick", "calendario.adicionar()");
            td_29.setAttribute("onclick", "calendario.adicionar()");
            td_30.setAttribute("onclick", "calendario.adicionar()");


        } else if (this.mesreferencia == "3") {

            let tr1 = tbodycalendar.insertRow();

            let td_1 = tr1.insertCell();
            let td_2 = tr1.insertCell();
            let td_3 = tr1.insertCell();
            let td_4 = tr1.insertCell();
            let td_5 = tr1.insertCell();
            let td_6 = tr1.insertCell();
            let td_7 = tr1.insertCell();

            let tr2 = tbodycalendar.insertRow();

            let td_8 = tr2.insertCell();
            let td_9 = tr2.insertCell();
            let td_10 = tr2.insertCell();
            let td_11 = tr2.insertCell();
            let td_12 = tr2.insertCell();
            let td_13 = tr2.insertCell();
            let td_14 = tr2.insertCell();

            let tr3 = tbodycalendar.insertRow();

            let td_15 = tr3.insertCell();
            let td_16 = tr3.insertCell();
            let td_17 = tr3.insertCell();
            let td_18 = tr3.insertCell();
            let td_19 = tr3.insertCell();
            let td_20 = tr3.insertCell();
            let td_21 = tr3.insertCell();

            let tr4 = tbodycalendar.insertRow();

            let td_22 = tr4.insertCell();
            let td_23 = tr4.insertCell();
            let td_24 = tr4.insertCell();
            let td_25 = tr4.insertCell();
            let td_26 = tr4.insertCell();
            let td_27 = tr4.insertCell();
            let td_28 = tr4.insertCell();

            let tr5 = tbodycalendar.insertRow();

            let td_29 = tr5.insertCell();
            let td_30 = tr5.insertCell();
            let td_31 = tr5.insertCell();

            td_1.innerText = "1";
            td_2.innerText = "2";
            td_3.innerText = "3";
            td_4.innerText = "4";
            td_5.innerText = "5";
            td_6.innerText = "6";
            td_7.innerText = "7";
            td_8.innerText = "8";
            td_9.innerText = "9";
            td_10.innerText = "10";
            td_11.innerText = "11";
            td_12.innerText = "12";
            td_13.innerText = "13";
            td_14.innerText = "14";
            td_15.innerText = "15";
            td_16.innerText = "16";
            td_17.innerText = "17";
            td_18.innerText = "18";
            td_19.innerText = "19";
            td_20.innerText = "20";
            td_21.innerText = "21";
            td_22.innerText = "22";
            td_23.innerText = "23";
            td_24.innerText = "24";
            td_25.innerText = "25";
            td_26.innerText = "26";
            td_27.innerText = "27";
            td_28.innerText = "28";
            td_29.innerText = "29";
            td_30.innerText = "30";
            td_31.innerText = "31";


            td_10.classList.add('bg-warning');
            td_27.classList.add('bg-danger');

            td_1.setAttribute("onclick", "calendario.adicionar(1)");
            td_2.setAttribute("onclick", "calendario.adicionar()");
            td_3.setAttribute("onclick", "calendario.adicionar()");
            td_4.setAttribute("onclick", "calendario.adicionar()");
            td_5.setAttribute("onclick", "calendario.adicionar()");
            td_6.setAttribute("onclick", "calendario.adicionar()");
            td_7.setAttribute("onclick", "calendario.adicionar()");
            td_8.setAttribute("onclick", "calendario.adicionar()");
            td_9.setAttribute("onclick", "calendario.adicionar()");
            td_10.setAttribute("onclick", "calendario.adicionar()");
            td_11.setAttribute("onclick", "calendario.adicionar()");
            td_12.setAttribute("onclick", "calendario.adicionar()");
            td_13.setAttribute("onclick", "calendario.adicionar()");
            td_14.setAttribute("onclick", "calendario.adicionar()");
            td_15.setAttribute("onclick", "calendario.adicionar()");
            td_16.setAttribute("onclick", "calendario.adicionar()");
            td_17.setAttribute("onclick", "calendario.adicionar()");
            td_18.setAttribute("onclick", "calendario.adicionar()");
            td_19.setAttribute("onclick", "calendario.adicionar()");
            td_20.setAttribute("onclick", "calendario.adicionar()");
            td_21.setAttribute("onclick", "calendario.adicionar()");
            td_22.setAttribute("onclick", "calendario.adicionar()");
            td_23.setAttribute("onclick", "calendario.adicionar()");
            td_24.setAttribute("onclick", "calendario.adicionar()");
            td_25.setAttribute("onclick", "calendario.adicionar()");
            td_26.setAttribute("onclick", "calendario.adicionar()");
            td_27.setAttribute("onclick", "calendario.adicionar()");
            td_28.setAttribute("onclick", "calendario.adicionar()");
            td_29.setAttribute("onclick", "calendario.adicionar()");
            td_30.setAttribute("onclick", "calendario.adicionar()");

        } else if (this.mesreferencia == "4") {

        let tr1 = tbodycalendar.insertRow();

            let td_b = tr1.insertCell();
            td_b = tr1.insertCell();
            td_b = tr1.insertCell();
            let td_1 = tr1.insertCell();
            let td_2 = tr1.insertCell();
            let td_3 = tr1.insertCell();
            let td_4 = tr1.insertCell();
            

            let tr2 = tbodycalendar.insertRow();

            let td_5 = tr2.insertCell();
            let td_6 = tr2.insertCell();
            let td_7 = tr2.insertCell();
            let td_8 = tr2.insertCell();
            let td_9 = tr2.insertCell();
            let td_10 = tr2.insertCell();
            let td_11 = tr2.insertCell();
            

            let tr3 = tbodycalendar.insertRow();

            let td_12 = tr3.insertCell();
            let td_13 = tr3.insertCell();
            let td_14 = tr3.insertCell();
            let td_15 = tr3.insertCell();
            let td_16 = tr3.insertCell();
            let td_17 = tr3.insertCell();
            let td_18 = tr3.insertCell();

            let tr4 = tbodycalendar.insertRow();

            let td_19 = tr4.insertCell();
            let td_20 = tr4.insertCell();
            let td_21 = tr4.insertCell();
            let td_22 = tr4.insertCell();
            let td_23 = tr4.insertCell();
            let td_24 = tr4.insertCell();
            let td_25 = tr4.insertCell();

            let tr5 = tbodycalendar.insertRow();

            let td_26 = tr5.insertCell();
            let td_27 = tr5.insertCell();
            let td_28 = tr5.insertCell();
            let td_29 = tr5.insertCell();
            let td_30 = tr5.insertCell();
            let td_31 = tr5.insertCell();

            td_b.innerText = "";
            td_1.innerText = "1";
            td_2.innerText = "2";
            td_3.innerText = "3";
            td_4.innerText = "4";
            td_5.innerText = "5";
            td_6.innerText = "6";
            td_7.innerText = "7";
            td_8.innerText = "8";
            td_9.innerText = "9";
            td_10.innerText = "10";
            td_11.innerText = "11";
            td_12.innerText = "12";
            td_13.innerText = "13";
            td_14.innerText = "14";
            td_15.innerText = "15";
            td_16.innerText = "16";
            td_17.innerText = "17";
            td_18.innerText = "18";
            td_19.innerText = "19";
            td_20.innerText = "20";
            td_21.innerText = "21";
            td_22.innerText = "22";
            td_23.innerText = "23";
            td_24.innerText = "24";
            td_25.innerText = "25";
            td_26.innerText = "26";
            td_27.innerText = "27";
            td_28.innerText = "28";
            td_29.innerText = "29";
            td_30.innerText = "30";
            td_31.innerText = "31";

            td_31.classList.add('bg-danger');
            td_27.classList.add('bg-success');
            td_28.classList.add('bg-success');
            td_29.classList.add('bg-success');
            td_30.classList.add('bg-success');

            td_1.setAttribute("onclick", "calendario.adicionar()");
            td_2.setAttribute("onclick", "calendario.adicionar()");
            td_3.setAttribute("onclick", "calendario.adicionar()");
            td_4.setAttribute("onclick", "calendario.adicionar()");
            td_5.setAttribute("onclick", "calendario.adicionar()");
            td_6.setAttribute("onclick", "calendario.adicionar()");
            td_7.setAttribute("onclick", "calendario.adicionar()");
            td_8.setAttribute("onclick", "calendario.adicionar()");
            td_9.setAttribute("onclick", "calendario.adicionar()");
            td_10.setAttribute("onclick", "calendario.adicionar()");
            td_11.setAttribute("onclick", "calendario.adicionar()");
            td_12.setAttribute("onclick", "calendario.adicionar()");
            td_13.setAttribute("onclick", "calendario.adicionar()");
            td_14.setAttribute("onclick", "calendario.adicionar()");
            td_15.setAttribute("onclick", "calendario.adicionar()");
            td_16.setAttribute("onclick", "calendario.adicionar()");
            td_17.setAttribute("onclick", "calendario.adicionar()");
            td_18.setAttribute("onclick", "calendario.adicionar()");
            td_19.setAttribute("onclick", "calendario.adicionar()");
            td_20.setAttribute("onclick", "calendario.adicionar()");
            td_21.setAttribute("onclick", "calendario.adicionar()");
            td_22.setAttribute("onclick", "calendario.adicionar()");
            td_23.setAttribute("onclick", "calendario.adicionar()");
            td_24.setAttribute("onclick", "calendario.adicionar()");
            td_25.setAttribute("onclick", "calendario.adicionar()");
            td_26.setAttribute("onclick", "calendario.adicionar()");
            td_27.setAttribute("onclick", "calendario.adicionar()");
            td_28.setAttribute("onclick", "calendario.adicionar()");
            td_29.setAttribute("onclick", "calendario.adicionar()");
            td_30.setAttribute("onclick", "calendario.adicionar()");
            td_31.setAttribute("onclick", "calendario.adicionar()");
        }
    }
    adicionar() {
        let compromisso = prompt("Insira o compromisso:")
        alert(compromisso + " \n\nconfirmado!")
    }
}

var calendario = new calendar;

class AprovarDisciplina {

    constructor() {
        this.id = 1;
        this.status = "Aguardando Aprovação";
        this.arrayDisciplinas = [];
    }

    aprovarSolicitacao() {
        this.lerDados();

        this.listaTabela();


        console.log(this.arrayDisciplinas);

    }

    aprovarTotal() {
        this.total();
    }

    listaTabela() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = "";

        for (let i = 0; i < this.arrayDisciplinas.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_disciplina = tr.insertCell();
            let td_status = tr.insertCell();
            let td_valor = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayDisciplinas[i].id;
            td_disciplina.innerText = this.arrayDisciplinas[i].disciplina;
            td_valor.innerText = this.arrayDisciplinas[i].valor;
            td_status.innerText = this.arrayDisciplinas[i].status;

            td_id.classList.add('col-2');
            td_status.classList.add('col-3');
            td_acoes.classList.add('col-2');
            td_disciplina.classList.add('col-3');

            let imgDelete = document.createElement('img');
            imgDelete.src = 'img/delete.svg';
            imgDelete.classList.add('tableacoesimg');
            imgDelete.setAttribute("onclick", "disciplinaAprovar.deletar(" + this.arrayDisciplinas[i].id + ")");

            td_acoes.appendChild(imgDelete);

            // let imgAprovar = document.createElement('img');
            // imgAprovar.src = 'img/delete.svg';
            // imgAprovar.classList.add('tableacoesimg');
            // imgAprovar.setAttribute("onclick", "disciplinaAprovar.deletar(" + this.arrayDisciplinas[i].id + ")");

            // td_acoes.appendChild(imgAprovar);


        }
    }

    lerDados() {
        this.arrayDisciplinas = [
            {
                id: 1,
                disciplina: 'Clube da Música',
                status: 'Aguardando',
                valor: "R$ 250,00 reais",
                soma: 250
            },
            {
                id: 2,
                disciplina: 'Judô',
                status: 'Aguardando',
                valor: "R$ 350,00 reais",
                soma: 350
            },
            {
                id: 3,
                disciplina: 'Natação',
                status: 'Aguardando',
                valor: "R$ 100,00 reais",
                soma: 100
            }
        ]

    }

    deletar(id) {

        if (confirm('Deseja realmente deletar essa inscrição ' + id + '?')) {
            let tbody = document.getElementById('tbody');
            console.log(id);

            for (let i = 0; i < this.arrayDisciplinas.length; i++) {
                if (this.arrayDisciplinas[i].id == id) {
                    this.arrayDisciplinas.splice(i, 1);
                    tbody.deleteRow(i);
                }
            }
        }

    }

    total() {
        let somaTotal = 0;
        for (let i = 0; i < this.arrayDisciplinas.length; i++) {
            somaTotal = this.arrayDisciplinas[i].soma + somaTotal;
        }
        console.log(somaTotal);

        alert("O valor total das disciplinas extras ficou de: R$ " + somaTotal + ",00 reais")
    }
}

class ConsultarNotas {

    constructor() {
        this.id = 1;
        this.status = "Aprovado!"
        this.arrayNotas = [];
    }

    consultar() {
        this.lerDados();

        this.listaTabela();


        console.log(this.arrayNotas);

    }

    consultaExtras(){

        this.lerDadosExtras();

        this.listaTabelaExtras();
    }

    aprovarTotal() {
        this.total();
    }

    listaTabela() {
        let tbody = document.getElementById('tbodynotas');
        tbody.innerText = "";

        for (let i = 0; i < this.arrayNotas.length; i++) {
            let tr = tbody.insertRow();

            let td_disciplinas = tr.insertCell();
            let td_nota1 = tr.insertCell();
            let td_nota2 = tr.insertCell();
            let td_media = tr.insertCell();
            let td_faltas = tr.insertCell();
            let td_status = tr.insertCell();

            td_disciplinas.innerText = this.arrayNotas[i].disciplina;
            td_nota1.innerText = this.arrayNotas[i].Nota01;
            td_nota2.innerText = this.arrayNotas[i].Nota02;
            td_media.innerText = this.arrayNotas[i].Media;
            td_faltas.innerText = this.arrayNotas[i].Faltas;
            td_status.innerText = this.status;


        }
    }

    listaTabelaExtras() {
        let tbody = document.getElementById('tbodynotasExtras');
        tbody.innerText = "";

        for (let i = 0; i < this.arrayNotas.length; i++) {
            let tr = tbody.insertRow();

            let td_disciplinas = tr.insertCell();
            let td_faltas = tr.insertCell();
            let td_status = tr.insertCell();

            td_disciplinas.innerText = this.arrayNotas[i].disciplina;
            td_faltas.innerText = this.arrayNotas[i].Faltas;
            td_status.innerText = this.status;

        }
    }

    lerDados() {
        this.arrayNotas = [
            {
                id: 1,
                disciplina: 'Português',
                Nota01: 9,
                Nota02: 8,
                Media: 8.5,
                Faltas: 2

            },
            {
                id: 2,
                disciplina: 'Matemática',
                Nota01: 10,
                Nota02: 8,
                Media: 9,
                Faltas: 1
            },
            {
                id: 3,
                disciplina: 'Ciências',
                Nota01: 8,
                Nota02: 8,
                Media: 8,
                Faltas: 3
            }
        ]

    }

    lerDadosExtras() {
        this.arrayNotas = [
            {
                id: 1,
                disciplina: 'Clube da Música',
                Faltas: 2

            },
            {
                id: 2,
                disciplina: 'Natação',
                Faltas: 1
            },
            {
                id: 3,
                disciplina: 'Judô',
                Faltas: 3
            }
        ]

    }

    deletar(id) {

        if (confirm('Deseja realmente deletar essa inscrição ' + id + '?')) {
            let tbody = document.getElementById('tbody');
            console.log(id);

            for (let i = 0; i < this.arrayDisciplinas.length; i++) {
                if (this.arrayDisciplinas[i].id == id) {
                    this.arrayDisciplinas.splice(i, 1);
                    tbody.deleteRow(i);
                }
            }
        }

    }

    total() {
        let somaTotal = 0;
        for (let i = 0; i < this.arrayDisciplinas.length; i++) {
            somaTotal = this.arrayDisciplinas[i].soma + somaTotal;
        }
        console.log(somaTotal);

        alert("O valor total das disciplinas extras ficou de: R$ " + somaTotal + ",00 reais")
    }
}

var disciplinaAprovar = new AprovarDisciplina;
var consultaNotas = new ConsultarNotas;

class enviarMensagem {

    constructor() {
        this.arrayMsg = [];
        this.id = 0;
    }

    interacaoChat() {
        let chat = this.lerDados();

        this.adicionar(chat);

        this.listaTabela();

        console.log(this.arrayMsg);
    }

    lerDados() {
        let msg = {};

        msg.message = document.getElementById('mensagemusuario').value;

        return msg;
    }

    adicionar(chat) {
        this.arrayMsg.push(chat);
        this.id++;
    }

    listaTabela() {
        let tbody = document.getElementById('tbodychat');
        tbody.innerText = "";

        for (let i = 0; i < this.arrayMsg.length; i++) {
            let tr = tbody.insertRow();

            let td_message = tr.insertCell();

            td_message.classList.add('tableAlignUsuario');

            td_message.innerText = this.arrayMsg[i].message;

            document.getElementById('mensagemusuario').value = '';

            if (i == "0") {
                let tr = tbody.insertRow();

                let td_message = tr.insertCell();

                td_message.classList.add('tableAlignComputer');

                setTimeout(function () {
                    td_message.innerText = "Olá, no que podemos ajudar?";
                }, 1500);


            } else if (i == "1") {
                let tr = tbody.insertRow();

                let td_message = tr.insertCell();

                td_message.classList.add('tableAlignComputer');

                setTimeout(function () {
                    td_message.innerText = "Para consultar as mensalidades pendentes acesse a barra de navegação (Financeiro). Podemos auxiliar em mais alguma coisa?";
                }, 1500);

            } else if (i == "2") {
                let tr = tbody.insertRow();

                let td_message = tr.insertCell();

                td_message.classList.add('tableAlignComputer');

                setTimeout(function () {
                    td_message.innerText = "Para falar com os professores ligue para (41) 89909-9909.";
                }, 1500);
            } else {
                let tr = tbody.insertRow();

                let td_message = tr.insertCell();

                td_message.classList.add('tableAlignComputer');

                setTimeout(function () {
                    td_message.innerText = "Atendimento Encerrado!";
                }, 1500);

                // setTimeout(function () {
                //     if (confirm('Deseja limpar a conversa?')) {
                //         let tbodychat = document.getElementById('tbodychat');

                //         for (let i = 0; i < this.arrayMsg.length; i++) {
                //             this.arrayMsg.splice(i, 1);
                //             tbodychat.deleteRow(i);
                //         }
                //     }
                // }, 2000);
            }
        }

    }
}

var chat = new enviarMensagem;