<script>
  document.getElementById('orderForm').addEventListener('submit', function(e){
    e.preventDefault();
    const color = document.getElementById('color').value;
    const talla = document.getElementById('talla').value;
    const diseno = document.getElementById('diseno').value;
    const cantidad = document.getElementById('cantidad').value;
    document.getElementById('formMessage').textContent =
      `Solicitud de ejemplo: ${cantidad} playera(s), color ${color}, talla ${talla}. Diseño: ${diseno}. Este formulario es una demostración y no envía datos.`;
  });
</script>