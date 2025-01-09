export default interface EventManagerInterface<
  TEvent = string,
  TPayload = any
> {
  /**
   * Registra um listener para um evento específico.
   * @param event O nome do evento.
   * @param listener A função a ser executada quando o evento for emitido.
   */
  on(event: TEvent, listener: (payload: TPayload) => void): void;

  /**
   * Emite um evento, chamando todos os listeners associados.
   * @param event O nome do evento.
   * @param payload Os dados a serem passados para os listeners.
   */
  emit(event: TEvent, payload: TPayload): void;

  /**
   * Remove um listener específico de um evento.
   * @param event O nome do evento.
   * @param listenerToRemove O listener a ser removido.
   */
  removeListener(
    event: TEvent,
    listenerToRemove: (payload: TPayload) => void
  ): void;
}
