# Memory

La memoria del proyecto está en el vault de Obsidian en `memory/`. Este archivo le indica al AI cómo interactuar con ella.

## Protocolo

1. **Al iniciar sesión**: leer `memory/_index.md` para orientarse
2. **Memoria activa**: leer `memory/sessions/current.md` si existe para retomar contexto
3. **Al completar trabajo**: actualizar `memory/sessions/` con un resumen de lo hecho
4. **Decisiones nuevas**: registrar en `memory/decisions/` con formato ADR ligero
5. **Tareas**: mantener actualizado `memory/tasks/current.md`
6. **Errores**: registrar en `memory/learned/errores.md` cualquier error cometido para no repetirlo

## Estructura

```
memory/
├── _index.md         # Mapa raíz del vault
├── sessions/         # Resúmenes de sesiones de trabajo
│   ├── current.md    # Sesión activa
│   └── YYYY-MM-DD.md # Sesiones archivadas
├── decisions/        # Decisiones técnicas y de diseño (ADRs)
│   └── _index.md
├── tasks/            # Plan de trabajo
│   ├── current.md
│   └── backlog.md
├── learned/          # Errores y lecciones aprendidas
│   └── errores.md
└── project/          # Notas del dominio de negocio
    ├── glossary.md
    └── client-notes.md
```

## Reglas

- Todas las notas se escriben en español (idioma del proyecto)
- Usar links de Obsidian `[[wiki-links]]` para conectar notas relacionadas
- Las sesiones se archivan con fecha `YYYY-MM-DD.md` al cerrar
- No incluir información sensible (contraseñas, API keys, etc.)
- **Errores propios**: si la IA comete un error (código incorrecto, suposición equivocada, patrón incorrecto), debe registrarlo en `[[memory/learned/errores|learned/errores]]` inmediatamente al notarlo
- **Leer antes de escribir**: siempre leer los archivos existentes antes de editarlos para entender contexto, imports y convenciones
- **Seguir convenciones**: revisar archivos vecinos antes de crear nuevos para mantener consistencia en imports, nomenclatura y patrones
- **No asumir librerías**: verificar imports reales y `package.json` antes de usar una librería externa
- **Verificar cambios**: ejecutar `pnpm lint` después de modificar código
