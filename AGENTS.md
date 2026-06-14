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
├── audit/            # Auditorías y revisiones del código
│   └── YYYY-MM-DD.md # Reportes de revisión general
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
- **No instalar dependencias sin preguntar**: preguntar antes de ejecutar `npm install` / `pnpm add` cualquier paquete nuevo
- **Scope limitado**: no modificar archivos fuera del alcance de la tarea actual
- **Registrar feedback del usuario**: si el usuario da feedback sobre algo, guardarlo en la nota correspondiente de `memory/` para recordarlo
- **Consultar auditoría**: antes de iniciar cambios arquitectónicos o refactors grandes, leer `[[memory/audit/]]` más reciente para conocer el estado actual del código y problemas conocidos
- **Nunca en main**: nunca hacer cambios directamente en la rama `main`. Siempre crear una rama nueva con nombre descriptivo (ej. `fix/nombre-del-cambio`, `feat/nombre-de-funcionalidad`), trabajar allí, y al terminar preguntar antes de hacer merge o PR
- **Editar, no reescribir**: preferir ediciones quirúrgicas con `edit` sobre reescribir archivos completos. Si un archivo necesita cambios mayores, leerlo completo primero para mantener imports y convenciones existentes
- **Build > Lint**: ejecutar `pnpm build` además de `pnpm lint` para verificar que el proyecto compila (el lint puede fallar por errores pre-existentes no relacionados)
- **Tool calls en paralelo**: al buscar información independiente (varios archivos, varios patrones), lanzar los tool calls en paralelo en un solo mensaje en lugar de secuencialmente
- **Task agent para exploración grande**: si la tarea requiere buscar en más de 5 archivos o patrones, usar el subagente `explore` con thoroughness `medium` o `very thorough` para no saturar el contexto
- **No preguntar lo que ya está en memory**: antes de hacer una pregunta al usuario, revisar `memory/` (notas del cliente, decisiones, glosario) para ver si ya está documentado
- **No sugerir migraciones no solicitadas**: no proponer cambios de stack (TypeScript, cambio de librerías, refactors arquitectónicos) a menos que el usuario lo pida explícitamente
- **Preguntar antes de eliminar**: no borrar archivos o componentes sin consultar primero al usuario
