from pyteal import *

router = Router(
    "Atomic Transfer CertificateNFT for Athena Tokens",
    BareCallActions(
        # Defining what happens during creation
        no_op = OnCompleteAction.create_only(Approve()),
    ),
)

# Using transaction types to access the txns in the atomic group 
@router.method
# Takes in two payment txn type args #--> order of args matter
def abi_multiple_pay(CertificateNFT:abi.PaymentTransaction, AthenaTokens:abi.PaymentTransaction):
    return Seq(
        # Asserting the receiver of each payment is the current app address
        Assert(CertificateNFT.get().receiver() == Global.current_application_address()),
        Assert(AthenaTokens.get().receiver() == Global.current_application_address()),
        # Asserting the amount of payment CertificateNFT is the same asset ID as CertificateNFT (or same creator wallet address?)
        Assert(CertificateNFT.get().amount() == ,
        # Asserting the amount of payment AthenaTokens is 10 AthenaTokens
        Assert(AthenaTokens.get().amount() == ,
        Approve()
    )

if __name__ == "__main__":
    import os
    import json

    path = os.path.dirname(os.path.abspath(__file__))
    approval, clear, contract = router.compile_program(version=8)

    # Dump out the contract as json that can be read in by any of the SDKs
    with open(os.path.join(path, "artifacts/contract.json"), "w") as f:
        f.write(json.dumps(contract.dictify(), indent=2))

    # Write out the approval and clear programs
    with open(os.path.join(path, "artifacts/approval.teal"), "w") as f:
        f.write(approval)

    with open(os.path.join(path, "artifacts/clear.teal"), "w") as f:
        f.write(clear)
               
