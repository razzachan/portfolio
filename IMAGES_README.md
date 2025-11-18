# Sistema de Imagens do Portfólio

## Estrutura

Todas as imagens dos projetos ficam em: `public/projects/`

Cada projeto tem um array `images` que aponta para os arquivos SVG mockup gerados automaticamente.

## Como Substituir por Imagens Reais

1. **Mantenha os mesmos nomes de arquivo** ou atualize o array `images` em `src/lib/projects.ts`
2. **Formatos recomendados**: JPG, PNG, WebP
3. **Dimensões sugeridas**: 
   - Imagem principal (card): 1200x630 (16:9)
   - Galeria: 1200x900 ou 1600x1200 (4:3)

## Mapeamento Atual

```
Projeto 1: EletroFix Hub Pro → /projects/project-1.svg
Projeto 2: ImmoFlow → /projects/project-2.svg
Projeto 3: Pulse Digital (Tráfego) → /projects/project-3.svg
Projeto 4: Pulse Digital (Clínicas) → /projects/project-4.svg
Projeto 5: Feirão do Ar-Condicionado → /projects/project-5.svg
Projeto 6: Doce Aroma → /projects/project-6.svg
Projeto 7: Miracle Bot → /projects/project-7.svg
```

## Exemplo de Substituição

### Opção 1: Manter nomes
Substitua `project-1.svg` por `project-1.jpg` (ou .png, .webp)

### Opção 2: Nomes customizados
1. Adicione suas imagens: `public/projects/eletrofix-hero.jpg`
2. Atualize em `src/lib/projects.ts`:
```typescript
{
  slug: "eletrofix-hub-pro-fix-fogoes",
  // ...
  images: [
    "/projects/eletrofix-hero.jpg",
    "/projects/eletrofix-dashboard.jpg",
    "/projects/eletrofix-mobile.jpg"
  ]
}
```

## Múltiplas Imagens (Galeria)

Adicione mais elementos ao array `images`:
```typescript
images: [
  "/projects/projeto-hero.jpg",      // Exibida no card e topo
  "/projects/projeto-screen-1.jpg",  // Galeria
  "/projects/projeto-screen-2.jpg",  // Galeria
  "/projects/projeto-screen-3.jpg"   // Galeria
]
```

A primeira imagem aparece:
- Nos cards de projetos (home e /projects)
- No topo da página de detalhe

As demais aparecem na galeria da página de detalhe.

## Next.js Image Optimization

O Next.js otimiza automaticamente todas as imagens em `public/`:
- Redimensionamento automático
- Formatos modernos (WebP/AVIF)
- Lazy loading
- Blur placeholder (se configurado)

Basta colocar as imagens na pasta `public/projects/` e referenciar com `/projects/nome.extensao`.
