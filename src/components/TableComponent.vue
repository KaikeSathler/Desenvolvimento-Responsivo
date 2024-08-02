<script lang="ts">
import '@/assets/style/StyleComponents.scss'
export default {
  name: 'TableComponent'
}
</script>
<template>
  <section>
  </section>
  <section style="flex-direction: column" class="section-flex">
    <table cellspacing="0">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Fórmula Molecular</th>
          <th>Imagem</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Metilamina</td>
          <td>CH<sub>3</sub>NH<sub>2</sub></td>
          <td><img src="/image/image1.jpg" alt="" /></td>
        </tr>
        <tr>
          <td>Aluminio</td>
          <td>Al</td>
          <td><img width="200px" src="/image/Aluminium.jpg" alt="" /></td>
        </tr>
        <tr>
          <td>Fosfina</td>
          <td>PH<sub>3</sub></td>
          <td>
            <img width="200px" src="/image/Phosphine-3D-balls.png" alt="" />
          </td>
        </tr>
        <tr>
          <td>Ácido fenilacético</td>
          <td>C<sub>8</sub>H<sub>8</sub>O<sub>2</sub></td>
          <td><img width="200px" src="/image/acido.webp" alt="" /></td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
