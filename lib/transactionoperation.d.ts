import ProcessOut = require("./processout");
declare class TransactionOperation {
    private client;
    /**
     * ID of the transaction operation
     * @type {string}
     */
    private id;
    /**
     * Transaction to which the operation belongs
     * @type {any}
     */
    private transaction;
    /**
     * ID of the transaction to which the operation belongs
     * @type {string}
     */
    private transactionId;
    /**
     * Token that was used by the operation, if any
     * @type {any}
     */
    private token;
    /**
     * ID of the token was used by the operation, if any
     * @type {string}
     */
    private tokenId;
    /**
     * Card that was used by the operation, if any
     * @type {any}
     */
    private card;
    /**
     * ID of the card that was used by the operation, if any
     * @type {string}
     */
    private cardId;
    /**
     * Amount of the operation
     * @type {string}
     */
    private amount;
    /**
     * True if the operation is an attempt, false otherwise
     * @type {boolean}
     */
    private isAttempt;
    /**
     * True if the operation has failed, false otherwise
     * @type {boolean}
     */
    private hasFailed;
    /**
     * True if the operation amount can be accounted for, false otherwise
     * @type {boolean}
     */
    private isAccountable;
    /**
     * Type of the operation, such as authorization, capture, refund or void
     * @type {string}
     */
    private type;
    /**
     * ID of the operation done through the PSP
     * @type {string}
     */
    private gatewayOperationId;
    /**
     * Error code returned when attempting the operation, if any
     * @type {string}
     */
    private errorCode;
    /**
     * Additionnal context saved when processing the transaction on the specific PSP
     * @type {any}
     */
    private gatewayData;
    /**
     * ThreeDS request payment data (read-only)
     * @type {any}
     */
    private paymentDataThreeDSRequest;
    /**
     * 3-D Secure authentication payment data (read-only)
     * @type {any}
     */
    private paymentDataThreeDSAuthentication;
    /**
     * Network authentication payment data (read-only)
     * @type {any}
     */
    private paymentDataNetworkAuthentication;
    /**
     * Metadata related to the operation, in the form of a dictionary (key-value pair)
     * @type {any}
     */
    private metadata;
    /**
     * Gateway fee generated by the operation
     * @type {string}
     */
    private gatewayFee;
    /**
     * Date at which the operation was created
     * @type {string}
     */
    private createdAt;
    /**
     * TransactionOperation constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: TransactionOperation);
    getProcessOutObjectClass(): string;
    /**
     * Get Id
     * ID of the transaction operation
     * @return {string}
     */
    getId(): string;
    /**
     * Set Id
     * ID of the transaction operation
     * @param {string} val
     * @return {TransactionOperation}
     */
    setId(val: string): TransactionOperation;
    /**
     * Get Transaction
     * Transaction to which the operation belongs
     * @return {any}
     */
    getTransaction(): any;
    /**
     * Set Transaction
     * Transaction to which the operation belongs
     * @param {any} val
     * @return {TransactionOperation}
     */
    setTransaction(val: any): TransactionOperation;
    /**
     * Get TransactionId
     * ID of the transaction to which the operation belongs
     * @return {string}
     */
    getTransactionId(): string;
    /**
     * Set TransactionId
     * ID of the transaction to which the operation belongs
     * @param {string} val
     * @return {TransactionOperation}
     */
    setTransactionId(val: string): TransactionOperation;
    /**
     * Get Token
     * Token that was used by the operation, if any
     * @return {any}
     */
    getToken(): any;
    /**
     * Set Token
     * Token that was used by the operation, if any
     * @param {any} val
     * @return {TransactionOperation}
     */
    setToken(val: any): TransactionOperation;
    /**
     * Get TokenId
     * ID of the token was used by the operation, if any
     * @return {string}
     */
    getTokenId(): string;
    /**
     * Set TokenId
     * ID of the token was used by the operation, if any
     * @param {string} val
     * @return {TransactionOperation}
     */
    setTokenId(val: string): TransactionOperation;
    /**
     * Get Card
     * Card that was used by the operation, if any
     * @return {any}
     */
    getCard(): any;
    /**
     * Set Card
     * Card that was used by the operation, if any
     * @param {any} val
     * @return {TransactionOperation}
     */
    setCard(val: any): TransactionOperation;
    /**
     * Get CardId
     * ID of the card that was used by the operation, if any
     * @return {string}
     */
    getCardId(): string;
    /**
     * Set CardId
     * ID of the card that was used by the operation, if any
     * @param {string} val
     * @return {TransactionOperation}
     */
    setCardId(val: string): TransactionOperation;
    /**
     * Get Amount
     * Amount of the operation
     * @return {string}
     */
    getAmount(): string;
    /**
     * Set Amount
     * Amount of the operation
     * @param {string} val
     * @return {TransactionOperation}
     */
    setAmount(val: string): TransactionOperation;
    /**
     * Get IsAttempt
     * True if the operation is an attempt, false otherwise
     * @return {boolean}
     */
    getIsAttempt(): boolean;
    /**
     * Set IsAttempt
     * True if the operation is an attempt, false otherwise
     * @param {boolean} val
     * @return {TransactionOperation}
     */
    setIsAttempt(val: boolean): TransactionOperation;
    /**
     * Get HasFailed
     * True if the operation has failed, false otherwise
     * @return {boolean}
     */
    getHasFailed(): boolean;
    /**
     * Set HasFailed
     * True if the operation has failed, false otherwise
     * @param {boolean} val
     * @return {TransactionOperation}
     */
    setHasFailed(val: boolean): TransactionOperation;
    /**
     * Get IsAccountable
     * True if the operation amount can be accounted for, false otherwise
     * @return {boolean}
     */
    getIsAccountable(): boolean;
    /**
     * Set IsAccountable
     * True if the operation amount can be accounted for, false otherwise
     * @param {boolean} val
     * @return {TransactionOperation}
     */
    setIsAccountable(val: boolean): TransactionOperation;
    /**
     * Get Type
     * Type of the operation, such as authorization, capture, refund or void
     * @return {string}
     */
    getType(): string;
    /**
     * Set Type
     * Type of the operation, such as authorization, capture, refund or void
     * @param {string} val
     * @return {TransactionOperation}
     */
    setType(val: string): TransactionOperation;
    /**
     * Get GatewayOperationId
     * ID of the operation done through the PSP
     * @return {string}
     */
    getGatewayOperationId(): string;
    /**
     * Set GatewayOperationId
     * ID of the operation done through the PSP
     * @param {string} val
     * @return {TransactionOperation}
     */
    setGatewayOperationId(val: string): TransactionOperation;
    /**
     * Get ErrorCode
     * Error code returned when attempting the operation, if any
     * @return {string}
     */
    getErrorCode(): string;
    /**
     * Set ErrorCode
     * Error code returned when attempting the operation, if any
     * @param {string} val
     * @return {TransactionOperation}
     */
    setErrorCode(val: string): TransactionOperation;
    /**
     * Get GatewayData
     * Additionnal context saved when processing the transaction on the specific PSP
     * @return {any}
     */
    getGatewayData(): any;
    /**
     * Set GatewayData
     * Additionnal context saved when processing the transaction on the specific PSP
     * @param {any} val
     * @return {TransactionOperation}
     */
    setGatewayData(val: any): TransactionOperation;
    /**
     * Get PaymentDataThreeDSRequest
     * ThreeDS request payment data (read-only)
     * @return {any}
     */
    getPaymentDataThreeDSRequest(): any;
    /**
     * Set PaymentDataThreeDSRequest
     * ThreeDS request payment data (read-only)
     * @param {any} val
     * @return {TransactionOperation}
     */
    setPaymentDataThreeDSRequest(val: any): TransactionOperation;
    /**
     * Get PaymentDataThreeDSAuthentication
     * 3-D Secure authentication payment data (read-only)
     * @return {any}
     */
    getPaymentDataThreeDSAuthentication(): any;
    /**
     * Set PaymentDataThreeDSAuthentication
     * 3-D Secure authentication payment data (read-only)
     * @param {any} val
     * @return {TransactionOperation}
     */
    setPaymentDataThreeDSAuthentication(val: any): TransactionOperation;
    /**
     * Get PaymentDataNetworkAuthentication
     * Network authentication payment data (read-only)
     * @return {any}
     */
    getPaymentDataNetworkAuthentication(): any;
    /**
     * Set PaymentDataNetworkAuthentication
     * Network authentication payment data (read-only)
     * @param {any} val
     * @return {TransactionOperation}
     */
    setPaymentDataNetworkAuthentication(val: any): TransactionOperation;
    /**
     * Get Metadata
     * Metadata related to the operation, in the form of a dictionary (key-value pair)
     * @return {any}
     */
    getMetadata(): any;
    /**
     * Set Metadata
     * Metadata related to the operation, in the form of a dictionary (key-value pair)
     * @param {any} val
     * @return {TransactionOperation}
     */
    setMetadata(val: any): TransactionOperation;
    /**
     * Get GatewayFee
     * Gateway fee generated by the operation
     * @return {string}
     */
    getGatewayFee(): string;
    /**
     * Set GatewayFee
     * Gateway fee generated by the operation
     * @param {string} val
     * @return {TransactionOperation}
     */
    setGatewayFee(val: string): TransactionOperation;
    /**
     * Get CreatedAt
     * Date at which the operation was created
     * @return {string}
     */
    getCreatedAt(): string;
    /**
     * Set CreatedAt
     * Date at which the operation was created
     * @param {string} val
     * @return {TransactionOperation}
     */
    setCreatedAt(val: string): TransactionOperation;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {TransactionOperation}
     */
    fillWithData(data: any): TransactionOperation;
}
export = TransactionOperation;