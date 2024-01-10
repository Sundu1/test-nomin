"""Added a new column to the BudgetSpend

Revision ID: 4bf7ab50a608
Revises: b013980d9871
Create Date: 2023-12-11 15:29:40.330523

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '4bf7ab50a608'
down_revision = 'b013980d9871'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('budget_spend', sa.Column('receiver_comment', sa.String(), nullable=True))
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('budget_spend', 'receiver_comment')
    # ### end Alembic commands ###
