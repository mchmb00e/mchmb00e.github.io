document.addEventListener('DOMContentLoaded', function () {

    console.log("Desarrollado por Miguel Chamorro.\nContacto: miguelchamorro912@gmail.com\nTel: +56 9 3337 2677\n\nVersión: 1.1.0")

    const tbody = document.getElementById('items-body');
    const btnAdd = document.getElementById('btn-add-item');
    // Referencia al nuevo checkbox
    const chkNoIva = document.getElementById('chk-no-iva');

    function formatMoney(amount) {
        return '$' + amount.toLocaleString('es-CL');
    }

    function parseMoney(str) {
        if (!str) return 0;
        return parseFloat(str.toString().replace(/\$|\./g, '')) || 0;
    }

    function calculateTotals() {
        let subtotal = 0;
        document.querySelectorAll('#items-body tr').forEach(row => {
            const totalInput = row.querySelector('.input-total');
            subtotal += parseMoney(totalInput.value);
        });

        // LÓGICA MODIFICADA PARA EL IVA
        const aplicaIva = !chkNoIva.checked; // Si "No quiero IVA" está marcado, aplicaIva es falso
        const iva = aplicaIva ? (subtotal * 0.19) : 0;
        const total = subtotal + iva;

        document.getElementById('subtotal').value = formatMoney(subtotal);
        document.getElementById('iva').value = formatMoney(Math.round(iva));
        document.getElementById('total-final').value = formatMoney(Math.round(total));
        
        // Visualmente tachamos o deshabilitamos el input de IVA si no aplica, para dar feedback
        document.getElementById('iva').style.textDecoration = aplicaIva ? 'none' : 'line-through';
        document.getElementById('iva').style.color = aplicaIva ? 'black' : '#999';
    }

    function addItem() {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="text-center fw-bold index-cell"></td>
            <td>
                <input type="text" class="form-control border-0 bg-transparent text-start input-desc" placeholder="Descripción">
            </td>
            <td>
                <input type="number" min="0" class="form-control border-0 text-end input-precio" value="0">
            </td>
            <td>
                <input type="number" min="0" class="form-control border-0 text-center input-cantidad" value="1">
            </td>
            <td>
                <input type="text" class="form-control border-0 bg-transparent text-end fw-bold input-total" value="$0" readonly>
            </td>
            <td class="text-center action-col">
                <div class="btn-group btn-group-sm">
                    <button type="button" class="btn btn-outline-secondary btn-up">↑</button>
                    <button type="button" class="btn btn-outline-secondary btn-down">↓</button>
                    <button type="button" class="btn btn-outline-danger btn-delete">✕</button>
                </div>
            </td>
        `;
        tbody.appendChild(row);
        updateIndexes();
        updateRowTotal(row);
    }

    function updateIndexes() {
        const rows = tbody.querySelectorAll('tr');
        rows.forEach((row, index) => {
            row.querySelector('.index-cell').textContent = index + 1;
            const btnUp = row.querySelector('.btn-up');
            const btnDown = row.querySelector('.btn-down');
            if(btnUp) btnUp.disabled = (index === 0);
            if(btnDown) btnDown.disabled = (index === rows.length - 1);
        });
    }

    function updateRowTotal(row) {
        const precio = parseFloat(row.querySelector('.input-precio').value) || 0;
        const cantidad = parseFloat(row.querySelector('.input-cantidad').value) || 0;
        const total = precio * cantidad;
        row.querySelector('.input-total').value = formatMoney(total);
        calculateTotals();
    }

    tbody.addEventListener('input', function(e) {
        if (e.target.classList.contains('input-precio') || e.target.classList.contains('input-cantidad')) {
            updateRowTotal(e.target.closest('tr'));
        }
    });

    // Event listener para recalcular cuando tocas el checkbox
    chkNoIva.addEventListener('change', calculateTotals);

    tbody.addEventListener('click', function(e) {
        const row = e.target.closest('tr');
        if (!row) return;
        
        if (e.target.closest('.btn-delete')) { 
            row.remove(); 
            updateIndexes(); 
            calculateTotals(); 
        }
        if (e.target.closest('.btn-up') && row.previousElementSibling) { 
            tbody.insertBefore(row, row.previousElementSibling); 
            updateIndexes(); 
        }
        if (e.target.closest('.btn-down') && row.nextElementSibling) { 
            tbody.insertBefore(row.nextElementSibling, row); 
            updateIndexes(); 
        }
    });

    btnAdd.addEventListener('click', addItem);
    
    if(tbody.children.length === 0) addItem();

    window.keyBuffer = [];
    document.addEventListener('keydown', function(event) {
        window.keyBuffer.push(event.key);
        if (window.keyBuffer.length > 5) window.keyBuffer.shift();

        const secretCode = ['1', '2', '3', '4', ' '];
        if (JSON.stringify(window.keyBuffer) === JSON.stringify(secretCode)) {
            document.getElementById('nombre-emisor').value = "ITR ELECTROSTRUK SPA";
            document.getElementById('rut-emisor').value = "783458535";
            document.getElementById('responsable-emisor').value = "Juan Iturriaga";
            document.getElementById('telefono-emisor').value = "954011625";
            document.getElementById('email-emisor').value = "juan.iturriaga.contacto@gmail.com";
            document.getElementById('fecha-cotizacion').value = new Date().toISOString().split('T')[0];
            window.keyBuffer = [];
        }
    });
});

function action(mode) {
    if (mode === 'preview') {
        generarPrevisualizacion();
    } else if (mode === 'print') {
        window.print();
    } else if (mode === 'download') {
        alert("Para descargar, usa el botón 'Previsualizar' y guarda el PDF desde la nueva pestaña.");
    }
}

function generarPrevisualizacion() {
    const items = [];
    document.querySelectorAll('#items-body tr').forEach((row, index) => {
        const precioRaw = row.querySelector('.input-precio').value;
        const cantRaw = row.querySelector('.input-cantidad').value;
        const totalRaw = row.querySelector('.input-total').value;

        items.push({
            index: index + 1,
            desc: row.querySelector('.input-desc').value,
            precio: parseFloat(precioRaw) || 0,
            cant: parseFloat(cantRaw) || 0,
            total: parseFloat(totalRaw.replace(/\$|\./g, '')) || 0 
        });
    });

    // Verificamos estado del checkbox para pasarlo a la data
    const noIvaChecked = document.getElementById('chk-no-iva').checked;

    const data = {
        emisor: {
            nombre: document.getElementById('nombre-emisor').value,
            rut: document.getElementById('rut-emisor').value,
            encargado: document.getElementById('responsable-emisor').value,
            telefono: document.getElementById('telefono-emisor').value,
            email: document.getElementById('email-emisor').value,
        },
        receptor: {
            nombre: document.getElementById('nombre-receptor').value,
            rut: document.getElementById('rut-receptor').value,
            direccion: document.getElementById('direccion-receptor').value,
            telefono: document.getElementById('telefono-receptor').value,
            email: document.getElementById('email-receptor').value,
        },
        cotizacion: {
            numero: document.getElementById('numero-cotizacion').value,
            fecha: document.getElementById('fecha-cotizacion').value,
            validez: `${document.getElementById('validez-unidad').value} ${document.getElementById('validez-medida').value}`
        },
        items: items,
        observaciones: document.getElementById('observaciones').value,
        totales: {
            subtotal: parseFloat(document.getElementById('subtotal').value.replace(/\$|\./g, '')) || 0,
            iva: parseFloat(document.getElementById('iva').value.replace(/\$|\./g, '')) || 0,
            total: parseFloat(document.getElementById('total-final').value.replace(/\$|\./g, '')) || 0,
            // Agregamos esta bandera para saber si mostrar u ocultar la fila en el HTML final
            mostrarIva: !noIvaChecked 
        }
    };

    localStorage.setItem('cotizacionData', JSON.stringify(data));
    window.open('preview.html', '_blank');
}