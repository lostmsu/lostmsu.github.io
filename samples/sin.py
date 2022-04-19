import torch


class Sin(torch.nn.Module):
    def __init__(self):
        super().__init__()
        self.freq = torch.nn.Parameter(torch.randn(1))

    def forward(self, x):
        return torch.sin(self.freq * x)


def func(x):
    return torch.sin(31 * x)


device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

net = Sin()


# set this to get 0 loss
# net.freq.data = torch.tensor([31], dtype=torch.float32)

def activation():
    return torch.nn.GELU()  # also try x * (sin(x) ** 2)


# alternatively, try a really large network
# net = torch.nn.Sequential(
#     torch.nn.Linear(1, 1024),
#     activation(),
#     torch.nn.Linear(1024, 1024),
#     activation(),
#     torch.nn.Linear(1024, 1024),
#     activation(),
#     torch.nn.Linear(1024, 1),
#     torch.nn.GELU(),
# )
net = net.to(device)
# opt = torch.optim.SGD(net.parameters(), lr=0.001)
opt = torch.optim.AdamW(net.parameters())

BATCH_SIZE = 32


def train_on_batch(batch_idx):
    opt.zero_grad()

    batch = (torch.rand(size=[BATCH_SIZE, 1], device=device) * 2 - 1) * 1000

    out = net(batch)
    expected = func(batch)

    loss = ((out - expected) ** 2).mean()

    loss.backward()

    opt.step()

    if batch_idx % 1000 == 0:
        print(f'{loss.detach().cpu().item()}')


if __name__ == "__main__":
    for batch_idx in range(1000 * 1000):
        train_on_batch(batch_idx)
