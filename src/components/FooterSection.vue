<script setup>
</script>

<template>
  <footer class="footer">
    <div class="container footer__inner">
      <a href="#" class="footer__logo">maison élan</a>
      <div class="footer__links">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
      <span class="footer__copy">&copy; 2025 Maison &Eacute;lan</span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--ink);
  color: var(--white);
  padding: 32px 0;
}

.footer__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer__logo {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.02em;
  opacity: 0.8;
}

.footer__links {
  display: flex;
  gap: 32px;
}

.footer__links a {
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  opacity: 0.6;
  transition: opacity 0.2s;
}

.footer__links a:hover {
  opacity: 1;
}

.footer__copy {
  font-family: var(--font-body);
  font-size: 12px;
  opacity: 0.4;
}

@media (max-width: 768px) {
  .footer__inner {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }

  .footer__links {
    gap: 24px;
  }
}
</style>
